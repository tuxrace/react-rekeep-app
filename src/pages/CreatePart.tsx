import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography, Grid, TextField } from '@material-ui/core';

const CreatePart = () => {
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
                        <TextField variant="filled" fullWidth placeholder="e.g. Allen Wrench" />
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            Part Name
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField variant="filled" fullWidth placeholder="e.g. Allen Wrench" />
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2} alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            Part Status
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField variant="filled" fullWidth placeholder="e.g. Allen Wrench" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Container>
}

export default CreatePart;
