import React from "react";
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
const SinglePost = () => {
  return (
    <SinglePostWrapper>
      {/* HEAD */}
      <HeaderOfPost>
        <Author>archdaily</Author>
        <Location>Amsterdam</Location>
      </HeaderOfPost>
      {/* PHOTO */}
      <PhotosContainer>
        <Photo src={testPhoto} />
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
      <Likes>13,184 likes</Likes>
      <Description>
        <Author>archdaiy</Author> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Totam ipsa sit aliquid recusandae. Odio dignissimos
        molestiae eos autem nesciunt quasi!
      </Description>
      <Comments>
        <BtnIcon>View all 154 comments</BtnIcon>
        <Date>2 days ago</Date>
      </Comments>
      <AddCommentSection>
        <AddComment type="text"></AddComment>
        <SubmitButton type="submit" onClick={(e) => e.preventDefault()}>
          Post
        </SubmitButton>
      </AddCommentSection>
    </SinglePostWrapper>
  );
};

export default SinglePost;
