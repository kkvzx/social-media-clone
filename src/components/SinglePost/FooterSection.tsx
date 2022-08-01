import React from "react";
import { useNavigate } from "react-router-dom";
import { Author, Description } from "./SinglePostElements";

const FooterSection = ({ username, caption }: FooterSectionProps) => {
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
