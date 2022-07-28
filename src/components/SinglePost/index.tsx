import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Actions from "./ActionsSection";
import AddCommentSection from "./AddCommentSection";
import CommentsSection from "./CommentsSection";
import FooterSection from "./FooterSection";
import HeaderOfPostSection from "./HeaderOfPostSection";
import PhotoSection from "./PhotoSection";
import {
  Author,
  SinglePostWrapper,
  BtnIcon,
  Description,
  Comments,
  AddComment,
  SubmitButton,
} from "./SinglePostElements";

const SinglePost = ({
  content: {
    photoId,
    caption,
    comments,
    dateCreated,
    docId,
    imageSrc,
    likes,
    userId,
    userLatitude,
    userLikedPhoto,
    userLongitude,
    username,
  },
}: photoProps) => {
  // const myDate = new Date(dataCreated * 1000);
  const [commentValue, setCommentValue] = useState<string>();
  const commentInput = useRef(null);
  const handleFocus = () => (commentInput as any).current.focus();
  const handleCommentValue = (text: string) => {
    setCommentValue(text);
  };
  async function handlePost(e: any) {
    e.preventDefault();
    // Updating the comments array by the comment,looged User throught photoid
    // await updateCommentsArray(loggedInUser, commentValue, photoId);
  }
  return (
    <SinglePostWrapper>
      {/* HEAD */}
      <HeaderOfPostSection username={username} />
      {/* PHOTO */}
      <PhotoSection imageSrc={imageSrc} />
      {/* REACTION BAR */}
      <Actions
        docId={docId}
        totalLikes={likes.length}
        likedPhoto={userLikedPhoto}
        handleFocus={handleFocus}
      />
      {/* DESCRIPTION AND LIKES */}
      <FooterSection
        username={username}
        caption={caption}
        comments={comments}
        handlePost={handlePost}
        handleCommentValue={handleCommentValue}
      />
      <CommentsSection
        docId={docId}
        comments={comments}
        posted={dateCreated}
        commentInput={commentInput}
      />
    </SinglePostWrapper>
  );
};

export default SinglePost;

interface photoProps {
  content: {
    key: "string";
    photoId: number;
    caption: string;
    comments: { displayName: string; comment: string }[];
    dateCreated: number;
    docId: string;
    imageSrc: string;
    likes: string[];
    userId: string;
    userLatitude: string;
    userLikedPhoto: boolean;
    userLongitude: string;
    username: string;
  };
}

// 40.7128;
// 74.006;
