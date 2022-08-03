import { useState } from "react";
import { formatDistance } from "date-fns";
import {
  Author,
  BtnIcon,
  Comments,
  Description,
  FormatDate,
} from "./SinglePostElements";
import { useNavigate } from "react-router-dom";
import AddCommentSection from "./AddCommentSection";
import { nanoid } from "nanoid";
import PhotoPage from "../../pages/PhotoPage/photoPage";
import * as ROUTES from "../../constants/routes";
const CommentsSection = ({
  docId,
  photoId,
  comments: allComments,
  posted,
  commentInput,
}: CommentProps) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(allComments);
  const handleViewAll = () => {
    navigate(`/photo/${photoId}`);
  };
  return (
    <Comments>
      {comments.length >= 3 && (
        <BtnIcon className="commentsText" onClick={handleViewAll}>
          View all {comments.length} comments
        </BtnIcon>
      )}
      {comments.slice(comments.length - 3, comments.length).map((item) => (
        <Description key={nanoid()}>
          <Author onClick={() => navigate(`/p/${item.displayName}`)}>
            {item.displayName}
          </Author>
          {item.comment}
        </Description>
      ))}
      <FormatDate>{formatDistance(posted, new Date())} ago</FormatDate>
      <AddCommentSection
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </Comments>
  );
};

export default CommentsSection;

interface CommentProps {
  docId: string;
  photoId: string;
  comments: { displayName: string; comment: string }[];
  posted: number;
  commentInput: React.MutableRefObject<any>;
}
