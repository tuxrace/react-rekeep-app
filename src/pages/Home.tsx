import React from 'react';
import Part from '../components/Part';

const Home = () => {
  return (
    <div>
      These parts are hard-coded; they should be removed.
      <Part name="Test part" id={123} status="Checked In" />
      <Part name="Another part" id={456} status="Checked Out" />
    </div>
  );
};

export default Home;
