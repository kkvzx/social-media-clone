import React, { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { getUserByUsername } from "../../services/firebase";
import {
  HeaderOfProfileWrapper,
  MainAvatar,
  Username,
  EditProfileButton,
  Number,
  FullName,
  ProfilDescription,
  Row,
  Content,
  Bold,
} from "./HeaderOfProfileelements";

const HeaderOfProfile = ({ visitedUserData }: any) => {
  const handleEdit = () => {
    console.log("edit");
  };
  const handleFollow = () => {
    console.log("follow");
  };
  const { user }: any = useUser();
  console.log(user);

  return visitedUserData && user ? (
    <HeaderOfProfileWrapper>
      <MainAvatar
        src={`/img/avatars/${visitedUserData[0].username}.jpg`}
        alt="photo"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/img/avatars/default.png";
        }}
      />
      <Content>
        <Row>
          <Username>{visitedUserData[0].username}</Username>
          {user[0].username === visitedUserData[0].username ? (
            <EditProfileButton onClick={handleEdit}>
              Edit profile
            </EditProfileButton>
          ) : (
            <EditProfileButton onClick={handleFollow}>Follow</EditProfileButton>
          )}
        </Row>
        <Row>
          {/* te dane wezme z photos */}
          <Number>
            <Bold>7</Bold> posts
          </Number>
          <Number>
            <Bold>11</Bold> followers
          </Number>
          <Number>
            <Bold>{visitedUserData[0].following.length}</Bold> following
          </Number>
        </Row>

        <FullName></FullName>
        <ProfilDescription>
          <Bold>{visitedUserData[0].fullName}</Bold>
        </ProfilDescription>
        <ProfilDescription>{visitedUserData[0].description}</ProfilDescription>
      </Content>
    </HeaderOfProfileWrapper>
  ) : null;
};

export default HeaderOfProfile;
