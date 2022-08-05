import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePhotos from "../../hooks/usePhotos";
import { getUserByUsername, getPhotosByUserId } from "../../services/firebase";
import { Bold } from "../HeaderOfProfile/HeaderOfProfileelements";
import { Author } from "../SinglePost/SinglePostElements";
import {
  PhotoGalleryWrapper,
  SinglePhoto,
  AllPhotos,
  NothingThere,
} from "./PhotoGalleryElements";

const PhotoGallery = ({ visitedUserData }: any) => {
  const [photos, setPhotos] = useState<any>();

  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const getPhotos = await getPhotosByUserId(visitedUserData[0].userId);
      setPhotos(getPhotos);
    }
    getData();
  }, [visitedUserData]);
  return (
    <PhotoGalleryWrapper>
      {/* <AllPhotos> */}
      {!(
        photos &&
        Object.keys(photos).length === 0 &&
        Object.getPrototypeOf(photos) === Object.prototype
      ) ? (
        photos?.length > 0 ? (
          photos.map((content: any) => (
            <SinglePhoto
              src={content.imageSrc}
              key={nanoid()}
              onClick={() => navigate(`/photo/${content.photoId}`)}
            ></SinglePhoto>
          ))
        ) : (
          <NothingThere>No photos yet</NothingThere>
        )
      ) : (
        <NothingThere>No photos yet</NothingThere>
      )}
      {/* </AllPhotos> */}
    </PhotoGalleryWrapper>
  );
};

export default PhotoGallery;
