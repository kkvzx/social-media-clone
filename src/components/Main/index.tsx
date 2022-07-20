import React from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../Header";
import { MainWrapper } from "./MainElements";

const Main = () => {
  return (
    <>
      <MainWrapper>
        <Header></Header>
        <h1>Hello</h1>
      </MainWrapper>
      <GlobalStyles />
    </>
  );
};

export default Main;
