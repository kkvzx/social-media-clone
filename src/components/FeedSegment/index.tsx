import SinglePost from "../SinglePost";
import { FeedSegmentWrapper } from "./FeedSegmentElements";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import usePhotos from "../../hooks/usePhotos";
import { NothingThere } from "../ProfileGallery/PhotoGalleryElements";

const FeedSegment = () => {
  // logged in user's photos
  const { photos }: any = usePhotos();
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
          <NothingThere>Follow more people to see photos</NothingThere>
        )
      ) : (
        <NothingThere>Follow more people to see photos</NothingThere>
      )}
    </FeedSegmentWrapper>
  );
};

export default FeedSegment;
