import React from "react";
import {
  HeaderElements,
  HeaderWrapper,
  LogoContainer,
  NavigationContainer,
  Searchbar,
} from "./HeaderElements";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderElements>
        <LogoContainer>FancyInstaFont</LogoContainer>
        <Searchbar type="search" />
        <NavigationContainer />
      </HeaderElements>
    </HeaderWrapper>
  );
};

export default Header;
