import React from "react";
import { useContext } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import { BtnIcon } from "../SinglePost/SinglePostElements";
import * as ROUTES from "../../constants/routes";
import {
  Avatar,
  HeaderElements,
  HeaderWrapper,
  LogBtn,
  LogoBtn,
  LogoContainer,
  LogoIcon,
  NavigationContainer,
  NavigationContainerLog,
  Searchbar,
  SignBtn,
  SingleIcon,
} from "./HeaderElements";
import { useNavigate } from "react-router-dom";

const logo = require("../../img/Logo.png");
const homeIcon = require("../../img/Home.png");
const sendIcon = require("../../img/Send.png");
const addPostIcon = require("../../img/Add_post.png");
const likeIcon = require("../../img/Like.png");
const signOut = require("../../img/signout.png");

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    firebase.auth().signOut();
    navigate(ROUTES.LOGIN);
  };
  return (
    <HeaderWrapper>
      <HeaderElements>
        <LogoContainer>
          <LogoBtn onClick={() => navigate(ROUTES.DASHBOARD)}>
            <LogoIcon src={logo} />
          </LogoBtn>
        </LogoContainer>
        {user ? (
          <NavigationContainer>
            <BtnIcon>
              <SingleIcon
                src={homeIcon}
                onClick={() => navigate(ROUTES.DASHBOARD)}
              />
            </BtnIcon>

            <BtnIcon onClick={handleSignOut}>
              <SingleIcon src={signOut} />
            </BtnIcon>
            <BtnIcon
              onClick={() => navigate(`/p/${user.displayName.toLowerCase()}`)}
            >
              <Avatar
                src={`/img/avatars/${user.displayName}.jpg`}
                alt="profile picture"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/img/avatars/default.png";
                }}
              />
            </BtnIcon>
          </NavigationContainer>
        ) : (
          <NavigationContainerLog>
            <LogBtn onClick={() => navigate(ROUTES.LOGIN)}>Log in</LogBtn>
            <SignBtn onClick={() => navigate(ROUTES.SIGN_UP)}>Sign in</SignBtn>
          </NavigationContainerLog>
        )}
      </HeaderElements>
    </HeaderWrapper>
  );
};

export default Header;
