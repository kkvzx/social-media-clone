import { useState } from "react";
import { formatDistance } from "date-fns";
import { LinkR } from "../SideSegment/SideSegmentElements";
import {
  Author,
  BtnIcon,
  Comments,
  Description,
  FormatDate,
} from "./SinglePostElements";
import { useNavigate } from "react-router-dom";
import AddCommentSection from "./AddCommentSection";
const CommentsSection = ({
  docId,
  comments: allComments,
  posted,
  commentInput,
}: CommentProps) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(allComments);

  return (
    <Comments>
      {comments.length >= 3 && (
        <BtnIcon className="commentsText">
          View all {comments.length} comments
        </BtnIcon>
      )}
      {comments.slice(0, 3).map((item) => (
        <Description>
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
  comments: { displayName: string; comment: string }[];
  posted: number;
  commentInput: React.MutableRefObject<any>;
}