import { formatDistance } from "date-fns";
import { nanoid } from "nanoid";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUserId } from "../../services/firebase";
import { Bold } from "../HeaderOfProfile/HeaderOfProfileelements";
import { LinkR } from "../SideSegment/SideSegmentElements";
import AddCommentSection from "../SinglePost/AddCommentSection";
import HeaderOfPostSection from "../SinglePost/HeaderOfPostSection";
import ActionsSection from "../SinglePost/ActionsSection";
import {
  Author,
  Comments,
  Description,
  FormatDate,
  HeaderOfPost,
} from "../SinglePost/SinglePostElements";
import { AvatarSideSmall } from "../SuggestedProfile/SuggestedProfileElemenets";
import {
  PhotoPageCommentsContainer,
  PhotoPageActions,
  PhotoPageHeader,
  PhotoPageCommentsSection,
  TextContainer,
  CommentContainer,
} from "./PhotoPageCommentsElements";
import UserContext from "../../context/user";
import { photoProps } from "../SinglePost";

const PhotoPageComments = ({ content }: photoProps) => {
  const navigate = useNavigate();
  const {
    user: { uid: userId = "" }, //Default empty string
  } = useContext(UserContext);
  const [authorData, setAuthorData] = useState<any>();
  const [comments, setComments] = useState(content.comments);
  const [userLikedPhoto, setUserLikedPhoto] = useState<boolean>(
    content.likes.includes(userId)
  );
  const handleFocus = () => (commentInput as any).current.focus();
  const commentInput = useRef(null);

  useEffect(() => {
    async function userDetails() {
      const user: any = await getUserByUserId(content.userId);
      const { username } = user[0];
      setAuthorData(username);
    }
    content && setUserLikedPhoto(content.likes.includes(userId));

    userDetails();
  }, [content]);

  return (
    <PhotoPageCommentsContainer>
      <HeaderOfPostSection username={authorData} />
      <PhotoPageCommentsSection>
        <Comments className="photoPage">
          <CommentContainer>
            <AvatarSideSmall
              src={`/img/avatars/${authorData}.jpg`}
              alt="avatar"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/img/avatars/default.png";
              }}
              onClick={() => navigate(`/p/${authorData}`)}
            />
            <TextContainer>
              <Author
                className="photoView"
                onClick={() => navigate(`/p/${authorData}`)}
              >
                {authorData}
              </Author>
              {content.caption}
            </TextContainer>
          </CommentContainer>

          {comments.length > 0 ? (
            comments.map((item: any) => (
              <CommentContainer key={nanoid()}>
                <AvatarSideSmall
                  src={`/img/avatars/${item.displayName}.jpg`}
                  alt="avatar"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "/img/avatars/default.png";
                  }}
                  onClick={() => navigate(`/p/${item.displayName}`)}
                />
                <TextContainer>
                  <Author
                    className="photoView"
                    onClick={() => navigate(`/p/${item.displayName}`)}
                  >
                    {item.displayName}
                  </Author>
                  {item.comment}
                </TextContainer>
              </CommentContainer>
            ))
          ) : (
            <CommentContainer className="noComments">
              <Bold className="noComments">No comments yet</Bold>
              <TextContainer>Add new comment below</TextContainer>
            </CommentContainer>
          )}
          {/* <FormatDate>
            {formatDistance(photo.dataCreated, new Date())} ago
          </FormatDate> */}
        </Comments>
      </PhotoPageCommentsSection>
      <ActionsSection
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={userLikedPhoto}
        handleFocus={handleFocus}
      />
      <AddCommentSection
        docId={content.docId}
        comments={content.comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </PhotoPageCommentsContainer>
  );
};

export default PhotoPageComments;
