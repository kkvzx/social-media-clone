import React from "react";
import SinglePost from "../SinglePost";
import { FeedSegmentWrapper } from "./FeedSegmentElements";

const FeedSegment = () => {
  return (
    <FeedSegmentWrapper>
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </FeedSegmentWrapper>
  );
};

export default FeedSegment;
