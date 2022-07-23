import React from "react";
import { BtnIcon } from "../SinglePost/SinglePostElements";
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
          <BtnIcon>
            <SingleIcon src={homeIcon} />
          </BtnIcon>
          <BtnIcon>
            <SingleIcon src={sendIcon} />
          </BtnIcon>
          <BtnIcon>
            <SingleIcon src={addPostIcon} />
          </BtnIcon>
          <BtnIcon>
            <SingleIcon src={likeIcon} />
          </BtnIcon>
        </NavigationContainer>
      </HeaderElements>
    </HeaderWrapper>
  );
};

export default Header;
