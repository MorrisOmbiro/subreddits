import { DialogContent, Drawer, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useCommentsThread } from "../../provider/ThreadProvider";
import { ThreadObject } from "../types";
import DrawerHeader from "./components/DrawerHeader";

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
}
const CommentsDrawer: React.FC<Props> = ({ open, title, onClose }) => {
  const { thread } = useCommentsThread();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ style: { width: "600px" } }}
    >
      <DrawerHeader onClose={onClose}>{title}</DrawerHeader>
      <DialogContent dividers>
        <CommentGrid container direction="column">
          {thread?.map((item: ThreadObject) => (
            <Grid
              item
              style={{
                padding: "4px",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <Typography gutterBottom>{item.body}</Typography>
            </Grid>
          ))}
        </CommentGrid>
      </DialogContent>
    </Drawer>
  );
};

const CommentGrid = styled(Grid)(({ theme }) => ({
  "& > div:nth-of-type(odd)": {
    backgroundColor: "#DAE0E6",
  },
  wordBreak: "break-word",
}));

export default CommentsDrawer;
