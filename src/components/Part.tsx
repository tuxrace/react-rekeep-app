import React from 'react';
import Card from '@material-ui/core/Card';

const Part = ({
  name,
  id,
  status,
}: {
  name: string;
  id: number;
  status: string;
}) => (
  <Card>
    <p>{name}</p>
    <p>ID: {id}</p>
    <p>Status: {status}</p>
  </Card>

  
);

export default Part;
