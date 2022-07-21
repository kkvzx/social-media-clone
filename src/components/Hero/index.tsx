import React from "react";
import FeedSegment from "../FeedSegment";
import SideSegment from "../SideSegment";
import { HeroWrapper, MiddleSegment } from "./HeroElements";

const Hero = () => {
  return (
    <HeroWrapper>
      <MiddleSegment>
        <FeedSegment />
        <SideSegment />
      </MiddleSegment>
    </HeroWrapper>
  );
};

export default Hero;
