import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import { useParams, useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../services/firebase";
import * as ROUTES from "../../constants/routes";
import Header from "../../components/Header";
import { MiddleSegment } from "../Dashboard/DashboardElements";
import HeaderOfProfile from "../../components/HeaderOfProfile";
import useUser from "../../hooks/useUser";

const Profile = () => {
  const { username } = useParams();
  const [userExist, setUserExist] = useState<boolean>();
  const [visitedUserExist, setVisitedUserExist] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      const doesUserExist = await getUserByUsername(username);
      if (doesUserExist.length > 0) {
        setUserExist(true);
        setVisitedUserExist(doesUserExist);
      } else {
        setUserExist(false);
        navigate(ROUTES.NOT_FOUND);
      }
    }
    checkUserExists();
  }, []);

  return (
    <>
      <Header />
      <MiddleSegment>
        <HeaderOfProfile visitedUserData={visitedUserExist} />
      </MiddleSegment>
    </>
  );
};

export default Profile;
