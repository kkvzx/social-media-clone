import React, { useState } from "react";
import { getPhotos, updateCommentsArray } from "../../services/firebase";
import { SingleIcon } from "../Header/HeaderElements";
import {
  Author,
  HeaderOfPost,
  SinglePostWrapper,
  Location,
  PhotosContainer,
  Photo,
  ReactionBar,
  IconSegment,
  NumberOfPhotos,
  Icon,
  Dot,
  BtnIcon,
  SavedIcon,
  SavedIconImg,
  Likes,
  Description,
  Comments,
  Date,
  AddComment,
  SubmitButton,
  AddCommentSection,
} from "./SinglePostElements";

const likeIcon = require("../../img/Like.png");
const commentIcon = require("../../img/Comment.png");
const sendIcon = require("../../img/Send.png");
const saveIcon = require("../../img/Save.png");
const testPhoto = require("../../photoTest.jpg");

const SinglePost = ({
  content: {
    photoId,
    caption,
    comments,
    dataCreated,
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
  const [commentValue, setCommentValue] = useState<string>("");
  async function handlePost(e: any) {
    e.preventDefault();
    // Updating the comments array by the comment,looged User throught photoid
    // await updateCommentsArray(loggedInUser, commentValue, photoId);
  }
  return (
    <SinglePostWrapper>
      {/* HEAD */}
      <HeaderOfPost>
        <Author>{username}</Author>
        <Location>Amsterdam</Location>
      </HeaderOfPost>
      {/* PHOTO */}
      <PhotosContainer>
        <Photo src={imageSrc} alt="?" />
      </PhotosContainer>
      {/* REACTION BAR */}
      <ReactionBar>
        <IconSegment>
          <BtnIcon>
            <Icon src={likeIcon}></Icon>
          </BtnIcon>
          <BtnIcon>
            <Icon src={commentIcon}></Icon>
          </BtnIcon>
          <BtnIcon>
            <Icon src={sendIcon}></Icon>
          </BtnIcon>
        </IconSegment>
        <NumberOfPhotos>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </NumberOfPhotos>
        <SavedIcon>
          <BtnIcon>
            <SavedIconImg src={saveIcon} />
          </BtnIcon>
        </SavedIcon>
      </ReactionBar>
      {/* DESCRIPTION AND LIKES */}
      <Likes>{likes.length} likes</Likes>
      <Description>
        <Author>{username}</Author> {caption}
      </Description>
      <Comments>
        {comments.length > 0 ? (
          <BtnIcon>View all {comments.length} comments</BtnIcon>
        ) : (
          <BtnIcon>No comments yet</BtnIcon>
        )}
        <Date>Two days ago</Date>
      </Comments>
      <AddCommentSection>
        <AddComment
          type="text"
          onChange={(e: any) => setCommentValue(e.target.value)}
        ></AddComment>
        <SubmitButton type="submit" onClick={(e) => handlePost(e)}>
          Post
        </SubmitButton>
      </AddCommentSection>
    </SinglePostWrapper>
  );
};

export default SinglePost;

interface photoProps {
  content: {
    key: "string";
    photoId: number;
    caption: string;
    comments: string[];
    dataCreated: number;
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
