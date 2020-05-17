import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Part from '../components/Part';
import { useRekeep } from 'rekeep';
import { PartType } from '../types';

const Home = () => {
  const {store, update} = useRekeep();
  const {parts} = store;
  return (
    <Container maxWidth="xl">
      <Box mt={3} px={3}>
        {parts.map((part: PartType) => (
          <Part name={part.name} id={part.id} status={part.status} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
