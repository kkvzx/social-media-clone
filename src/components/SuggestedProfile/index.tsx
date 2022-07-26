import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../context/firebase";
import { LinkR } from "../SideSegment/SideSegmentElements";
import { Author, Location } from "../SinglePost/SinglePostElements";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";
import {
  AvatarSideSmall,
  UserWrapperSmall,
  FollowBtn,
} from "./SuggestedProfileElemenets";

const SuggestedProfile = ({
  username,
  fullName,
  userId,
  spDocId,
  profileId,
  loggedInUserDocId,
}: SuggestedProfilesProps) => {
  const navigate = useNavigate();
  const [followed, setFollowed] = useState<boolean>(false);

  async function handleFollow() {
    setFollowed((prev) => !prev);
    // Updating the following array of the logged in user
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    // updating the followers array of the user who has been followed
    await updateFollowedUserFollowers(spDocId, userId, false);
  }
  return !followed ? (
    <UserWrapperSmall key={spDocId}>
      <AvatarSideSmall
        src={`/img/avatars/${username}.jpg`}
        alt="avatar"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/img/avatars/default.png";
        }}
        onClick={() => navigate(`/p/${username}`)}
      />
      <LinkR to={`/p/${username}`}>
        <Author>{username}</Author>
      </LinkR>
      <Location>{fullName}</Location>
      <FollowBtn onClick={() => handleFollow()}>
        {followed ? "Following" : "Follow"}
      </FollowBtn>
    </UserWrapperSmall>
  ) : (
    <></>
  );
};

interface SuggestedProfilesProps {
  username: string;
  fullName: string;
  userId: string;
  spDocId: string;
  loggedInUserDocId: string;
  profileId: string;
}

export default SuggestedProfile;
