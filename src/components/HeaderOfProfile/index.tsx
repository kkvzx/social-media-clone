import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import {
  getUserByUsername,
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from "../../services/firebase";
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
  const { user }: any = useUser();
  const [followed, setFollowed] = useState<boolean>(false);
  // is currently logged in user already following that user
  useEffect(() => {
    user[0] &&
      visitedUserData[0] &&
      setFollowed(user[0].following.includes(visitedUserData[0].userId));
  }, []);

  async function handleFollow() {
    setFollowed((prev) => !prev);
    // Updating the following array of the logged in user

    await updateLoggedInUserFollowing(
      user[0].docId,
      visitedUserData[0].userId,
      followed
    );
    // updating the followers array of the user who has been followed

    await updateFollowedUserFollowers(
      visitedUserData[0].docId,
      user[0].userId,
      followed
    );
  }
  // console.log(user);

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
          ) : followed ? (
            <EditProfileButton onClick={handleFollow} className="follow">
              Unfollow
            </EditProfileButton>
          ) : (
            <EditProfileButton onClick={handleFollow} className="follow">
              Follow
            </EditProfileButton>
          )}
        </Row>
        <Row>
          {/* te dane wezme z photos */}
          <Number>
            <Bold>7</Bold> posts
          </Number>

          <Number>
            <Bold>{visitedUserData[0].following.length}</Bold> following
          </Number>
        </Row>

        <ProfilDescription>
          <Bold>{visitedUserData[0].fullName}</Bold>
        </ProfilDescription>
        <ProfilDescription>{visitedUserData[0].description}</ProfilDescription>
      </Content>
    </HeaderOfProfileWrapper>
  ) : null;
};

export default HeaderOfProfile;
