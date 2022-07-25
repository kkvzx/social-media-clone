import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { getSuggestedProfiles } from "../../services/firebase";
import { Avatar } from "../Header/HeaderElements";
import { Author, Location } from "../SinglePost/SinglePostElements";
import {
  LinkR,
  LocationBig,
  SugestionsWrapper,
  UserWrapperSmall,
  AvatarSideSmall,
} from "./SideSegmentElements";
interface suggestionsProps {
  userId: string;
  following: string[];
}
const Suggestions = ({ userId, following }: suggestionsProps) => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<any>();
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);
  return (
    <SugestionsWrapper>
      <LocationBig>Suggestions For You</LocationBig>
      {!(
        profiles &&
        Object.keys(profiles).length === 0 &&
        Object.getPrototypeOf(profiles) === Object.prototype
      ) &&
        profiles?.map((singleProfile: any) => (
          <UserWrapperSmall key={nanoid()}>
            <AvatarSideSmall
              src={`/img/avatars/${singleProfile.username}.jpg`}
              alt="avatar"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/img/avatars/default.png";
              }}
              onClick={() => navigate(`/p/${singleProfile.username}`)}
            />
            <LinkR to={`/p/${singleProfile.username}`}>
              <Author>{singleProfile.username}</Author>
            </LinkR>
            <Location>{singleProfile.fullName}</Location>
          </UserWrapperSmall>
        ))}
    </SugestionsWrapper>
  );
};

export default Suggestions;
