import SinglePost from "../SinglePost";
import { FeedSegmentWrapper } from "./FeedSegmentElements";
import usePhotos from "../../hooks/usePhotos";
import { NothingThere } from "../ProfileGallery/PhotoGalleryElements";
import { Instagram } from "react-content-loader";
import { nanoid } from "nanoid";

const FeedSegment = () => {
  // logged in user's photos
  const { photos }: any = usePhotos();
  console.log(photos);
  return (
    <FeedSegmentWrapper>
      {!(
        photos && // 👈 null and undefined check
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
        [...Array(2)].map((item) => <Instagram key={nanoid()} />)
      )}
    </FeedSegmentWrapper>
  );
};

export default FeedSegment;
