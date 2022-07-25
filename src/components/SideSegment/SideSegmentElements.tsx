import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "../Header/HeaderElements";
import { Author, Location } from "../SinglePost/SinglePostElements";

export const SideSegmentWrapper = styled.div`
  width: 319px;
  height: 100%;
  padding: 86px 0;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: flex-start; */
  /* background: blue; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const UserWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 0.5fr 0.5fr;
  grid-gap: 0 25px;
  align-content: center;
  margin-bottom: 12px;
`;
export const UserWrapperSmall = styled(UserWrapper)`
  grid-template-columns: 30px auto;
  grid-gap: 0 16px;
  margin-top: 12px;
`;
export const AvatarSide = styled(Avatar)`
  width: 50px;
  height: 50px;
  grid-row-start: -1;
  grid-row-end: 1;
  border: none;
  cursor: pointer;
`;
export const AvatarSideSmall = styled(Avatar)`
  grid-row-start: -1;
  grid-row-end: 1;
`;
export const AuthorBig = styled(Author)`
  font-size: 14px;
`;
export const LocationBig = styled(Location)`
  font-size: 13px;
`;
export const LinkR = styled(Link)`
  text-decoration: none;
  align-self: end;
  font-size: 14px;
  &:visited {
  }
`;
export const SugestionsWrapper = styled.div``;
