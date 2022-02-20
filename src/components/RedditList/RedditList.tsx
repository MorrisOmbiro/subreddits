import React from "react";
import { styled } from "@mui/material";
import { useSubreddit } from "../../provider/CommentsProvider";
import { getSubredditComments } from "../../api/subredditComments";
import { RedditObject } from "../types";
import RedditTableCard from "./components/RedditTableCard";

const RedditList: React.FC = () => {
  const { subreddit } = useSubreddit();
  const [redditData, setRedditData] = React.useState<RedditObject[]>([
    { author: "", id: "", title: "" },
  ]);
  React.useEffect(() => {
    async function getData() {
      await getSubredditComments(subreddit ?? "").then((res) => {
        setRedditData(res.props.allData);
      });
    }
    getData();
  }, [subreddit]);

  return (
    <Div>
      <div>
        {redditData.map((redditItem) => (
          <RedditTableCard key={redditItem.id} redditItem={redditItem} />
        ))}
      </div>
    </Div>
  );
};

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default RedditList;
