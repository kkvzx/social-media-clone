import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import {
  BtnIcon,
  Dot,
  Icon,
  IconSegment,
  Likes,
  NumberOfPhotos,
  ReactionBar,
  SavedIcon,
  SavedIconImg,
} from "./SinglePostElements";

const ActionsSection = ({
  docId,
  totalLikes,
  likedPhoto,
  handleFocus,
}: actionProps) => {
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  const handleToggleLiked = async () => {
    setToggleLiked((prev: any) => !prev);

    await firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        likes: toggleLiked
          ? FieldValue.arrayRemove(userId)
          : FieldValue.arrayUnion(userId),
      });
    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  };
  return (
    <>
      <ReactionBar>
        <IconSegment>
          <BtnIcon onClick={() => handleToggleLiked()}>
            <Icon
              src={toggleLiked ? `/img/LikeRed.png` : `/img/Like.png`}
            ></Icon>
          </BtnIcon>
          <BtnIcon
            onClick={handleFocus}
            onKeyDown={(event: any) => {
              if (event.key === "enter") {
                handleFocus();
              }
            }}
          >
            <Icon src={`/img/Comment.png`}></Icon>
          </BtnIcon>
        </IconSegment>
      </ReactionBar>
      <Likes>{likes === 1 ? `${likes} like` : `${likes} likes`}</Likes>
    </>
  );
};

export default ActionsSection;

interface actionProps {
  docId: string;
  totalLikes: number;
  likedPhoto: boolean;
  handleFocus: () => void;
}
