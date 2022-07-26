import styled from "styled-components";
import { Avatar } from "../Header/HeaderElements";
import { UserWrapper } from "../SideSegment/SideSegmentElements";
export const UserWrapperSmall = styled(UserWrapper)`
  grid-template-columns: 30px auto 50px;
  grid-gap: 0 16px;
  margin-top: 12px;
`;
export const AvatarSideSmall = styled(Avatar)`
  grid-row-start: -1;
  grid-row-end: 1;
`;
export const FollowBtn = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: var(--secondary-color);
  font-weight: 700;
  grid-row-start: -1;
  grid-row-end: 1;
  cursor: pointer;
`;
