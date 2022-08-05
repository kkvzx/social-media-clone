import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import ContentLoader, { Facebook } from "react-content-loader";
import {
  editDecriptionByDocId,
  getPhotosByUserId,
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
  EditForm,
  EditInput,
} from "./HeaderOfProfileelements";

const HeaderOfProfile = ({ visitedUserData }: any) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(0);
  const [newDescription, setNewDescription] = useState<string>();
  const [followed, setFollowed] = useState<boolean>(false);

  const handleEdit = async () => {
    if (edit) {
      editDecriptionByDocId(visitedUserData[0].docId, newDescription);
    }
    setEdit((prev) => !prev);
  };
  const DescriptionSaver = (e: any) => {
    setNewDescription(e.target.value);
  };
  const { user }: any = useUser();
  // is currently logged in user already following that user
  useEffect(() => {
    user[0] &&
      setFollowed(user[0].following.includes(visitedUserData[0].userId));
  }, [visitedUserData]);

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
            edit ? (
              <EditProfileButton onClick={handleEdit} className="follow">
                Save
              </EditProfileButton>
            ) : (
              <EditProfileButton onClick={handleEdit}>
                Edit Profile
              </EditProfileButton>
            )
          ) : followed ? (
            <EditProfileButton onClick={handleFollow}>
              Unfollow
            </EditProfileButton>
          ) : (
            <EditProfileButton onClick={handleFollow} className="follow">
              Follow
            </EditProfileButton>
          )}
        </Row>
        <Row>
          <Number>
            <Bold>{visitedUserData[0].followers.length}</Bold> followers
          </Number>
          <Number>
            <Bold>{visitedUserData[0].following.length}</Bold> following
          </Number>
        </Row>

        <ProfilDescription>
          <Bold>{visitedUserData[0].fullName}</Bold>
        </ProfilDescription>
        {!edit ? (
          <ProfilDescription>
            {newDescription ? newDescription : visitedUserData[0].description}
          </ProfilDescription>
        ) : (
          <EditForm>
            <EditInput onChange={(e) => DescriptionSaver(e)}></EditInput>
          </EditForm>
        )}
      </Content>
    </HeaderOfProfileWrapper>
  ) : (
    <HeaderOfProfileWrapper>
      <ContentLoader height={150} width={2000} speed={1}>
        <rect x="0" y="0" rx="100" ry="100" width="150" height="150" />
        <rect x="250" y="20" rx="4" ry="4" width="300" height="20" />
        <rect x="250" y="60" rx="3" ry="3" width="250" height="10" />
        <rect x="250" y="80" rx="3" ry="3" width="250" height="10" />

        <rect x="250" y="100" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    </HeaderOfProfileWrapper>
  );
};

export default HeaderOfProfile;
