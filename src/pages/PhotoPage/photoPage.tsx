import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { PhotoPageContent } from "./PhotoPageElements";

const PhotoPage = () => {
  const { docId } = useParams();

  return (
    <>
      <Header />
      <PhotoPageContent>
        <h1>{docId}</h1>
      </PhotoPageContent>
    </>
  );
};

export default PhotoPage;
