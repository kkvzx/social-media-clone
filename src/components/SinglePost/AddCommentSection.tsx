import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import {
  AddCommentSectionWrapper,
  AddComment,
  SubmitButton,
} from "./SinglePostElements";
const AddCommentSection = ({
  docId,
  comments,
  setComments,
  commentInput,
}: addCommentsSectionProps) => {
  const [comment, setComment] = useState<any>("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmitComment = (event: any) => {
    event.preventDefault();
    setComments([...comments, { displayName, comment }]);
    setComment("");

    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };
  return (
    <AddCommentSectionWrapper
      method="POST"
      onSubmit={(event: any) =>
        comment.length >= 1
          ? handleSubmitComment(event)
          : event.preventDefault()
      }
    >
      <AddComment
        type="text"
        placeholder="Add a comment ..."
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        ref={commentInput}
      ></AddComment>
      <SubmitButton
        type="button"
        onClick={handleSubmitComment}
        disabled={!comment}
      >
        Post
      </SubmitButton>
    </AddCommentSectionWrapper>
  );
};

export default AddCommentSection;

interface addCommentsSectionProps {
  docId: string;
  comments: { displayName: string; comment: string }[];
  setComments: any;
  commentInput: React.MutableRefObject<any>;
}
