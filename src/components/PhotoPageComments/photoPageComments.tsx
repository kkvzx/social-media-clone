import { formatDistance } from "date-fns";
import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUserId } from "../../services/firebase";
import { Bold } from "../HeaderOfProfile/HeaderOfProfileelements";
import { LinkR } from "../SideSegment/SideSegmentElements";
import AddCommentSection from "../SinglePost/AddCommentSection";
import HeaderOfPostSection from "../SinglePost/HeaderOfPostSection";
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

const PhotoPageComments = ({ photo }: any) => {
  const navigate = useNavigate();
  const [authorData, setAuthorData] = useState<any>();
  const [comments, setComments] = useState(photo.comments);
  const commentInput = useRef(null);

  useEffect(() => {
    async function userDetails() {
      const user: any = await getUserByUserId(photo.userId);
      const { username } = user[0];
      setAuthorData(username);
    }
    userDetails();
  }, [photo]);
  authorData && console.log(photo);
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
              {photo.caption}
            </TextContainer>
          </CommentContainer>

          {comments.length > 0 ? (
            comments.map((item: any) => (
              <CommentContainer>
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
      <PhotoPageActions></PhotoPageActions>
      <AddCommentSection
        docId={photo.docId}
        comments={photo.comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </PhotoPageCommentsContainer>
  );
};

export default PhotoPageComments;
