import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import usePhotos from "../../hooks/usePhotos";
import { getUserByUsername, getPhotosByUserId } from "../../services/firebase";
import { Author } from "../SinglePost/SinglePostElements";
import {
  PhotoGalleryWrapper,
  SinglePhoto,
  AllPhotos,
} from "./PhotoGalleryElements";

const PhotoGallery = ({ visitedUserData }: any) => {
  const [photos, setPhotos] = useState<any>();
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
            <SinglePhoto src={content.imageSrc} key={nanoid()}></SinglePhoto>
          ))
        ) : (
          <Author>No photos yet</Author>
        )
      ) : null}
      {/* </AllPhotos> */}
    </PhotoGalleryWrapper>
  );
};

export default PhotoGallery;
