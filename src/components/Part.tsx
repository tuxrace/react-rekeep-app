import React from 'react';

const Part = ({
  name,
  id,
  status,
}: {
  name: string;
  id: number;
  status: string;
}) => (
  <div style={{ border: '1px solid black' }}>
    <p>{name}</p>
    <p>ID: {id}</p>
    <p>Status: {status}</p>
  </div>
);

export default Part;
