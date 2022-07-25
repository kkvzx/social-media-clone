import React, { useEffect, useState, useContext } from "react";
import { SideSegmentWrapper } from "./SideSegmentElements";
import UserContext from "../../context/user";
import { getUserByUserId } from "../../services/firebase";
import useUser from "../../hooks/useUser";
import Suggestions from "./Suggestions";
import User from "./User";
import Skeleton from "react-loading-skeleton";

const SideSegment = () => {
  const { user }: any = useUser();
  // !(
  //   user &&
  //   Object.keys(user).length === 0 &&
  //   Object.getPrototypeOf(user) === Object.prototype
  // ) && console.log(user[0].following);
  return !(
    user &&
    Object.keys(user).length === 0 &&
    Object.getPrototypeOf(user) === Object.prototype
  ) ? (
    <SideSegmentWrapper>
      <User username={user[0].username} fullName={user[0].fullName} />
      <Suggestions userId={user[0].userId} following={user[0].following} />
    </SideSegmentWrapper>
  ) : null;
};

export default SideSegment;
