import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Author,
  BtnIcon,
  Comments,
  Description,
  AddComment,
  SubmitButton,
} from "./SinglePostElements";

const FooterSection = ({
  username,
  caption,
  comments,
  handlePost,
  handleCommentValue,
}: FooterSectionProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Description>
        <Author onClick={() => navigate(`/p/${username}`)}>{username}</Author>
        {caption}
      </Description>
    </>
  );
};

interface FooterSectionProps {
  username: string;
  caption: string;
  comments: { displayName: string; comment: string }[];
  handlePost: (e: any) => void;
  handleCommentValue: (text: string) => void;
}

export default FooterSection;
