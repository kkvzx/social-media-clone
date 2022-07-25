import React, { memo, useContext } from "react";
import {
  AuthorBig,
  LocationBig,
  AvatarSide,
  LinkR,
  UserWrapper,
} from "./SideSegmentElements";
import Skeleton from "react-loading-skeleton";
import UserContext from "../../context/user";
import { Avatar } from "../Header/HeaderElements";
import { Author, Location } from "../SinglePost/SinglePostElements";
import { useNavigate } from "react-router-dom";

interface propTypes {
  username?: string;
  fullName?: string;
}
const User = ({ username, fullName }: propTypes) => {
  const navigate = useNavigate();
  return (
    <UserWrapper>
      <AvatarSide
        src={`/img/avatars/${username}.jpg`}
        alt="avatar"
        onClick={() => navigate(`/p/${username}`)}
      />
      <LinkR to={`/p/${username}`}>
        <AuthorBig>{username}</AuthorBig>
      </LinkR>
      <LocationBig>{fullName}</LocationBig>
    </UserWrapper>
  );
};
export default User;
