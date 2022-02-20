import { Grid, Paper, Typography } from "@mui/material";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import React from "react";

const Empty: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Paper
        elevation={0}
        style={{
          width: "600px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <ChromeReaderModeOutlinedIcon fontSize="large" color="info" />
          </Grid>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Tired of reading through threads of comments on reddit?
            </Typography>
            <Typography variant="h6" gutterBottom>
              Here we only show you the top comments (without their threads...
              and their threads... and their threads... and you've now spent 3
              hours on reddit)
            </Typography>
            <Typography variant="h6" gutterBottom>
              It's easier this way. I also don't wanna do recursion ❤️
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Empty;
