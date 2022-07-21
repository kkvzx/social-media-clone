import React from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../Header";
import Hero from "../Hero";
import { MainWrapper } from "./MainElements";

const Main = () => {
  return (
    <>
      <MainWrapper>
        <Header></Header>
        <Hero></Hero>
      </MainWrapper>
      <GlobalStyles />
    </>
  );
};

export default Main;
