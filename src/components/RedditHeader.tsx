import {
  Grid,
  styled,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { useSubreddit } from "../provider/CommentsProvider";

const RedditHeader: React.FC = () => {
  const { setSubreddit } = useSubreddit();
  const handleChange = (event: any) => {
    setSubreddit(event.target.value);
  };

  return (
    <MainHeader container item>
      <Grid item>
        <Typography
          variant="h5"
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }}
        >
          <strong>
            My<span style={{ color: "#349E48" }}>_</span>
            <span style={{ color: "#FF4525" }}>Reddit</span>
          </strong>
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          helperText="Search subreddits"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </MainHeader>
  );
};

const MainHeader = styled(Grid)({
  justifyContent: "space-between",
  width: "auto",
});
export default RedditHeader;
