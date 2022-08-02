import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import { useParams, useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../services/firebase";
import * as ROUTES from "../../constants/routes";
import Header from "../../components/Header";
import HeaderOfProfile from "../../components/HeaderOfProfile";
import useUser from "../../hooks/useUser";
import PhotoGallery from "../../components/ProfileGallery";
import { MiddleProfileSegment } from "./ProfileElements";

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
  }, [username]);

  return (
    <>
      <Header />
      <MiddleProfileSegment>
        <HeaderOfProfile visitedUserData={visitedUserExist} />
        <PhotoGallery visitedUserData={visitedUserExist} />
      </MiddleProfileSegment>
    </>
  );
};

export default Profile;
