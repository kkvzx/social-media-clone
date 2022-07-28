import React from "react";
import { useNavigate } from "react-router-dom";
import { LinkR } from "../SideSegment/SideSegmentElements";
import { AvatarSideSmall } from "../SuggestedProfile/SuggestedProfileElemenets";
import { Author, HeaderOfPost, Location } from "./SinglePostElements";

const HeaderOfPostSection = ({ username }: { username: string }) => {
  const navigate = useNavigate();
  return (
    <HeaderOfPost>
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
      <Location>{username}</Location>
    </HeaderOfPost>
  );
};

export default HeaderOfPostSection;
