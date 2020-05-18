import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Part from '../components/Part';
import { useRekeep } from 'rekeep';
import { PartType } from '../types';
import { makeStyles } from '@material-ui/core';
import styles from './Pages.styles';
import * as CONSTANTS from '../constants';

const { PARTS } = CONSTANTS;
const useStyles = makeStyles(styles);

const Home = () => {
  const { store } = useRekeep();
  const parts = store[PARTS];
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="column">
        <Typography variant="h5" color="secondary" gutterBottom>
            <strong>List of all parts</strong>
        </Typography>
        <Grid>
          {parts.map((part: PartType, idx: number) => (
            <Part key={idx} name={part.name} id={part.id} status={part.status} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
