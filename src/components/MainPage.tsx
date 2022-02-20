import { styled } from "@mui/material";
import React from "react";
import { useSubreddit } from "../provider/CommentsProvider";
import Empty from "../states/Empty";
// import Error from "../states/Error";
import Table from "../states/Table";
import RedditHeader from "./RedditHeader";

const MainPage = () => {
  const { subreddit } = useSubreddit();
  return (
    <>
      <MainDiv>
        <RedditHeader />
        {subreddit && <Table />}
        {!subreddit && <Empty />}
      </MainDiv>
    </>
  );
};

const MainDiv = styled("div")(({ theme }) => ({
  margin: theme.spacing(5),
}));

export default MainPage;
