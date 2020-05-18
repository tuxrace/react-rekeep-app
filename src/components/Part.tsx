import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Divider } from "@material-ui/core";
import { PartType } from "../types";

const Part = ({ name, id, status }: PartType) => (
  <Card>
    <Box p={1}>
      <CardHeader
        title={
          <Typography variant="h4" color="secondary">
            <strong>{name}</strong>
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <p>
          {`🟢`}ID: {id}
        </p>
        <p>
          {`🟣`}Status: <strong>{status}</strong>
        </p>
      </CardContent>
    </Box>
  </Card>
);

export default Part;
