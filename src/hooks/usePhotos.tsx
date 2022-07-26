import React, { useEffect, useContext, useState } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

const usePhotos = () => {
  const [photos, setPhotos] = useState({});

  const {
    user: { uid: userId = "" }, //Default empty string
  } = useContext(UserContext);

  useEffect(() => {
    async function getFeedPhotos() {
      const followingUserIds = await getUserByUserId(userId);
      const [{ following }] = (await getUserByUserId(userId)) as any;
      let followedUserPhotos = [];

      // does the user follow people?
      if (followingUserIds.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    getFeedPhotos();
  }, [userId]);

  return { photos };
};

export default usePhotos;
