import React, { useEffect, useState, useContext } from "react";
import { SideSegmentWrapper } from "./SideSegmentElements";
import UserContext from "../../context/user";
import { getUserByUserId } from "../../services/firebase";
import useUser from "../../hooks/useUser";
import Suggestions from "./Suggestions";
import User from "./User";
import { Facebook } from "react-content-loader";

const SideSegment = () => {
  const { user }: any = useUser();

  return (
    <SideSegmentWrapper>
      {!(
        user &&
        Object.keys(user).length === 0 &&
        Object.getPrototypeOf(user) === Object.prototype
      ) ? (
        <>
          <User username={user[0].username} fullName={user[0].fullName} />
          <Suggestions
            LoggedInUserDocId={user[0].docId}
            userId={user[0].userId}
            following={user[0].following}
          />
        </>
      ) : (
        [...Array(4)].map((item) => <Facebook key={item} />)
      )}
    </SideSegmentWrapper>
  );
};

export default SideSegment;
