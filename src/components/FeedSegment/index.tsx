import React, { useContext } from "react";
import SinglePost from "../SinglePost";
import { FeedSegmentWrapper } from "./FeedSegmentElements";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import usePhotos from "../../hooks/usePhotos";
import UserContext from "../../context/user";
import useUser from "../../hooks/useUser";
const FeedSegment = () => {
  // logged in user's photos
  const { photos }: any = usePhotos();
  const { user }: any = useUser();
  !(
    photos &&
    Object.keys(photos).length === 0 &&
    Object.getPrototypeOf(photos) === Object.prototype
  ) && console.log(photos.length);

  return (
    <FeedSegmentWrapper>
      {!(
        photos &&
        Object.keys(photos).length === 0 &&
        Object.getPrototypeOf(photos) === Object.prototype
      ) ? (
        photos?.length > 0 ? (
          photos.map((content: any) => (
            <SinglePost key={content.docId} content={content}></SinglePost>
          ))
        ) : (
          <p>Follow people to see photos</p>
        )
      ) : null}
    </FeedSegmentWrapper>
  );
};

export default FeedSegment;
