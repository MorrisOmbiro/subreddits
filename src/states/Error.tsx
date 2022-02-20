import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Error: React.FC = () => {
  return (
    <>
      <Grid container direction="column">
        <GridItem item>
          <Typography variant="h1">404</Typography>
        </GridItem>
        <GridItem item>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Woah there! It appears we had an issue reaching this endpoint.
          </Typography>
        </GridItem>
        <GridItem item>
          <Button color="primary" variant="outlined">
            Dashboard
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

const GridItem = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  justifyContent: "center",
}));

export default Error;
