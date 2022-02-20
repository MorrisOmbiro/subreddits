import { Typography } from "@mui/material";
import React from "react";

const ReadMore: React.FC = ({ children }) => {
  const text = children as string;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Typography>
      {isReadMore ? text?.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        style={{ color: "#63ADF7", cursor: "pointer" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </Typography>
  );
};

export default ReadMore;
