import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Part from '../components/Part';
import { useRekeep } from 'rekeep';
import { PartType } from '../types';

const Home = () => {
  const { store } = useRekeep();
  const {parts} = store;
  return (
    <Container maxWidth="lg">
      <Box mt={3} px={3}>
      <Typography variant="h5" color="secondary">
          <strong>List of all parts</strong>
      </Typography>
      
        {parts.map((part: PartType) => (
          <Part name={part.name} id={part.id} status={part.status} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
