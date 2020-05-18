import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Grid, TextField, Button, makeStyles, Radio, FormControlLabel, RadioGroup } from '@material-ui/core';
import { useRekeep } from 'rekeep';
import { PartType } from '../types';
import { useHistory } from 'react-router-dom';
import styles from './Pages.styles';
import * as CONSTANTS from '../constants';

const { PARTS } = CONSTANTS;
const useStyles = makeStyles(styles);

const CreatePart = () => {
    const { store, update } = useRekeep();
    const parts = store[PARTS];

    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState<PartType>({
        id: '',
        name: '',
        status: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        // Accepts only numbers for id field
        if(id === 'id' &&  !/^[0-9]+$/.test(value)){
            return
        }
        setState({...state, [id]: value});
    }

    const handleClick = () => {
        // Vaidate if all fields have value
        if(Object.entries(state).some(([key, value]) => value === '' )){
            alert('All fields are required');
            return
        };
        const newPart = state;
        update(PARTS, [...parts, newPart]);
        history.push('/');
    }

    return <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                <Typography variant="h5" color="secondary">
                    <strong>Create Part</strong>
                </Typography>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={12} lg={2}>
                        <Typography variant="body1">
                            Part ID*
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <TextField id="id" data-testid="part-id" variant="filled" fullWidth placeholder="e.g. 1234" value={state.id} onChange={handleChange} required/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item  xs={12} lg={2}>
                        <Typography variant="body1">
                            Part Name*
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <TextField id="name" data-testid="part-name" variant="filled" fullWidth placeholder="e.g. Allen Wrench" onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item  xs={12} lg={2}>
                        <Typography variant="body1">
                            Part Status*
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <RadioGroup onChange={handleChange}>
                            <FormControlLabel value="Checked In" control={<Radio id="status" />} label="Checked In" />
                            <FormControlLabel value="Checked Out" control={<Radio id="status" />} label="Checked Out" />
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12} lg={6}>
                    <Grid item xs={12} lg={6}>
                        <Button color="default" variant="contained" fullWidth href="/" className={classes.buttons}><Typography variant="button">Cancel </Typography> </Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button color="primary" variant="contained" fullWidth onClick={handleClick} className={classes.buttons}><Typography variant="button">Submit </Typography> </Button>
                    </Grid>
                </Grid>
            </Grid>
    </Container>
}

export default CreatePart;
