import React from "react";
import FeedSegment from "../../components/FeedSegment";
import Header from "../../components/Header";
import SideSegment from "../../components/SideSegment";
import { MiddleSegment } from "./DashboardElements";

const Feed = () => {
  return (
    <>
      <Header />
      <MiddleSegment>
        <FeedSegment />
        <SideSegment />
      </MiddleSegment>
    </>
  );
};

export default Feed;
