import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import { useRekeep } from 'rekeep';
import { PartType } from '../types';
import { useHistory } from 'react-router-dom';

const CreatePart = () => {
    const { store, update } = useRekeep();
    const history = useHistory();
    const { parts } = store;

    const [state, setState] = useState<PartType>({
        id: '',
        name: '',
        status: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        if (value !== ''){
            setState({...state, [id]: value});
        }
    }

    const handleClick = () => {
        const newPart = state;
        update('parts', [...parts, newPart]);
        history.push('/');
    }

    return <Container maxWidth="lg">
        <Box mt={3} px={3}>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                <Typography variant="h5" color="secondary">
                    <strong>Create Part</strong>
                </Typography>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            Part ID
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="id" variant="filled" fullWidth placeholder="e.g. Allen Wrench" value={state.id} onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            Part Name
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="name" variant="filled" fullWidth placeholder="e.g. Allen Wrench" onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            Part Status
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="status" variant="filled" fullWidth placeholder="e.g. Allen Wrench" onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={2}>
                        <Button color="default" variant="contained" fullWidth><Typography variant="button">Cancel </Typography> </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button color="primary" variant="contained" fullWidth onClick={handleClick}><Typography variant="button">Submit </Typography> </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Container>
}

export default CreatePart;
