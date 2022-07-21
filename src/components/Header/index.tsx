import React from "react";
import {
  HeaderElements,
  HeaderWrapper,
  LogoContainer,
  LogoIcon,
  NavigationContainer,
  Searchbar,
  SingleIcon,
} from "./HeaderElements";

const logo = require("../../img/Logo.png");
const homeIcon = require("../../img/Home.png");
const sendIcon = require("../../img/Send.png");
const addPostIcon = require("../../img/Add_post.png");
const likeIcon = require("../../img/Like.png");

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderElements>
        <LogoContainer>
          <LogoIcon src={logo} />
        </LogoContainer>
        <Searchbar type="search" />
        <NavigationContainer>
          <SingleIcon src={homeIcon} />
          <SingleIcon src={sendIcon} />
          <SingleIcon src={addPostIcon} />
          <SingleIcon src={likeIcon} />
          <SingleIcon src={homeIcon} />
          <SingleIcon src={sendIcon} />
        </NavigationContainer>
      </HeaderElements>
    </HeaderWrapper>
  );
};

export default Header;
