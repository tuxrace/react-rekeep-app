import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Grid, TextField, Button, makeStyles, Radio, FormControlLabel, RadioGroup, FormControl } from '@material-ui/core';
import { useRekeep } from 'rekeep';
import { PartType } from '../types';
import { useHistory } from 'react-router-dom';
import styles from './Pages.styles';
import * as CONSTANTS from '../constants';

const { PARTS } = CONSTANTS;
const useStyles = makeStyles(styles);

const CreatePart = () => {
    const validationObject = {
        id: 'required',
        name: 'required',
        status: 'required'
    };
    const formState = {
        id: '',
        name: '',
        status: '',
    };
    const errorsState = {
        id: false,
        name: false,
        status: false,
    };
    const { store, update } = useRekeep();
    const [ values, setValues ] = useState<PartType>(formState);
    const [ errors, setErrors ] = useState<any>(errorsState);
    
    const classes = useStyles();
    const history = useHistory();

    const parts = store[PARTS];
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        // Accepts only numbers for id field
        if(id === 'id' &&  !/^[0-9]+$/.test(value)){
            return
        }
        setValues({...values, [id]: value});
    }

    const handleClick = () => {
        // Vaidate if all fields have value
        if (!isValid(values, validationObject)){
            return;
        }
        const newPart = values;
        update(PARTS, [...parts, newPart]);
        history.push('/');
    }

    const isValid = (values: any, validationObject: any) => {
        Object.keys(validationObject).forEach(key => {
            if (validationObject[key] === 'required') {
                if (values[key] === '') {
                    setErrors({...errors, [key]: true });
                }
            }
        });
        return Object.keys(errors).length === 0
    }

    console.log(values, errors);

    return <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                <Typography variant="h5" color="secondary">
                    <strong>Create Part</strong>
                </Typography>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" sm={12}>
                    <Grid item xs={12} lg={2}>
                        <Typography variant="body1">
                            Part ID*
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <TextField id="id" data-testid="part-id" variant="filled" fullWidth placeholder="e.g. 1234" value={values.id} error  onChange={handleChange} required/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" sm={12}>
                    <Grid item xs={12} lg={2}>
                        <Typography variant="body1">
                            Part Name*
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <TextField id="name" data-testid="part-name" variant="filled" fullWidth placeholder="e.g. Allen Wrench"  value={values.name} {...(errors.name ? 'error' : {})} onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item  xs={12} lg={2}>
                        <Typography variant="body1">
                            Part Status*
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                    <FormControl component="fieldset" error>
                        {errors.status && <Typography variant="subtitle2">Select a Part Status</Typography>}
                        <RadioGroup onChange={handleChange} >
                            <FormControlLabel value="Checked In" control={<Radio id="status" />} label="Checked In" />
                            <FormControlLabel value="Checked Out" control={<Radio id="status" />} label="Checked Out" />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                </Grid>
                <Grid item container spacing={2} direction="row" alignItems="center" className={classes.buttonsContainer} sm={12} lg={6}>
                    <Grid item xs={12} lg={6}>
                        <Button color="default" variant="contained" fullWidth href="#" onClick={() => history.push('/')} className={classes.buttons}><Typography variant="button">Cancel </Typography> </Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button color="primary" variant="contained" fullWidth onClick={handleClick} className={classes.buttons}><Typography variant="button">Submit </Typography> </Button>
                    </Grid>
                </Grid>
            </Grid>
    </Container>
}

export default CreatePart;
