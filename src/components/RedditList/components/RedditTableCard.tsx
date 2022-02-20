import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { RedditObject } from "../../types";
import CommentsDrawer from "../../CommentsDrawer/CommentsDrawer";
import { getCommentThread } from "../../../api/commentThread";
import { useSubreddit } from "../../../provider/CommentsProvider";
import { useCommentsThread } from "../../../provider/ThreadProvider";
import ReadMore from "./ReadMore";

interface Props {
  redditItem: RedditObject;
}

const RedditTableCard: React.FC<Props> = ({ redditItem }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { subreddit } = useSubreddit();
  const { setThread } = useCommentsThread();

  const handleClick = async () => {
    await getCommentThread(subreddit ?? "", { ...redditItem }).then((res) => {
      setThread(res.props.allData);
    });
    setOpen(!open);
  };

  console.log(redditItem.selfText);
  return (
    <>
      <StyledCard sx={{ maxWidth: 800 }} style={{ marginBottom: "16px" }}>
        {redditItem.url && (
          <CardMedia
            onClick={handleClick}
            component="img"
            image={redditItem.url}
            alt={redditItem.title}
            style={{ cursor: "pointer" }}
          />
        )}
        <CardContent>
          <Grid
            item
            container
            style={{ justifyContent: "space-between", wordBreak: "break-word" }}
          >
            <Grid item xs={8}>
              <Typography
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={handleClick}
                gutterBottom
                variant="h5"
                component="div"
              >
                {redditItem.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div" color="text.secondary">
                - {redditItem.author}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            {redditItem.selfText?.length > 150 ? (
              <ReadMore>{redditItem.selfText}</ReadMore>
            ) : (
              redditItem.selfText
            )}
          </Typography>
        </CardContent>
      </StyledCard>
      <CommentsDrawer
        open={open}
        title={redditItem.title}
        onClose={handleClick}
      />
    </>
  );
};

const StyledCard = styled(Card)({
  "&:hover": {
    backgroundColor: "#FBFBFB",
  },
});
export default RedditTableCard;
