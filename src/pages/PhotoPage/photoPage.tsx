import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import PhotoPageComments from "../../components/PhotoPageComments/photoPageComments";
import { getPhotoByPhotoId } from "../../services/firebase";
import {
  PhotoPageContent,
  PhotoPageWrapper,
  PhotoPagePhoto,
} from "./PhotoPageElements";

const PhotoPage = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState<any>();

  useEffect(() => {
    async function gettingPhoto() {
      const receivedPhoto = await getPhotoByPhotoId(photoId);
      setPhoto(receivedPhoto);
      return photo;
    }
    gettingPhoto();
  }, [photoId]);
  return photo ? (
    <>
      <Header />
      <PhotoPageContent>
        <PhotoPageWrapper>
          <PhotoPagePhoto src={photo[0].imageSrc} alt="photo.jpg" />
          <PhotoPageComments photo={photo[0]} />
        </PhotoPageWrapper>
      </PhotoPageContent>
    </>
  ) : (
    <p>photo Not found</p>
  );
};

export default PhotoPage;
