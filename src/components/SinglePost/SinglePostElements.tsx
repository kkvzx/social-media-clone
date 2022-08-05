import styled from "styled-components";

export const SinglePostWrapper = styled.div`
  width: 100%;
  background: var(--header-background);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--shadows-color);
  border-radius: 8px;
  margin: 8px 0 2rem;
  overflow: hidden;
`;
/* HEAD STARt */
export const HeaderOfPost = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-columns: 30px auto;
  margin-left: 8px;
  grid-gap: 0 16px;
`;
export const Author = styled.p`
  font-size: 14px;
  margin-right: 4px;
  align-self: end;
  color: var(--font-color);
  font-weight: var(--bold-weight);
  grid-column-start: 2;
  grid-row-start: 1;
  cursor: pointer;
  &.photoView {
    display: inline;
    margin-right: 8px;
    font-size: 12px;
  }
`;
export const Location = styled.p`
  font-size: 12px;
  font-weight: var(--regular-weight);
  color: var(--font-color);
  grid-column-start: 2;
  grid-row-start: 2;
`;

/* HEAD END */

/* PHOTOS START */
export const PhotosContainer = styled.div`
  width: 100%;
  height: 352.5px;
`;
export const Photo = styled.img`
  width: 100%;
  height: 352.5px;

  object-fit: cover;
`;
/* PHOTOS END */
// REACTION BAR START
export const ReactionBar = styled.div`
  width: 100%;
  height: 46px;
  padding: 0 12px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const IconSegment = styled.div``;
export const BtnIcon = styled.button`
  margin: 0;
  padding: 8px;
  border: none;
  background: none;

  cursor: pointer;
  &.commentsText {
    margin-left: 20px;
    margin-bottom: 4px;
  }
`;
export const Icon = styled.img`
  width: 21px;
  height: 21px;
`;
export const NumberOfPhotos = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 9px;
`;
export const Dot = styled.div`
  width: 7px;
  height: 7px;
  margin: 2px;
  background: var(--shadows-color);
  border-radius: 50%;
`;
export const SavedIcon = styled.div`
  width: 111px;
  display: flex;
  justify-content: flex-end;
`;
export const SavedIconImg = styled.img`
  width: 16px;
  height: 18px;
`;
// REACTION BAR END

// DESCRIPTION START
export const Likes = styled.div`
  width: 100%;
  margin: 0px 8px 8px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: var(--bold-weight);
  color: black;
`;
export const Description = styled.div`
  width: 100%;
  margin: 4px 8px;
  padding: 0 12px;
  font-size: 12px;
  color: black;
  font-weight: var(--regular-weight);

  & > ${Author} {
    font-size: 12px;
    display: inline;
  }
`;
export const Comments = styled.div`
  width: 100%;
  margin: 0 0px 8px;
  padding: 0 0px;
  height: 100%;

  & > ${BtnIcon} {
    color: var(--comments-color);
    font-size: 12px;
    font-weight: var(--bold-weight);
    padding: 0;
  }
`;
export const FormatDate = styled.p`
  color: var(--comments-color);
  font-size: 10px;
  font-weight: var(--regular-weight);
  text-transform: Uppercase;
  margin: 12px 20px;
`;

// DESCRIPTION END
// ADD COMMENT SECTION START
export const AddCommentSectionWrapper = styled.form`
  width: 100%;
  height: 40px;
  border-top: 1px solid #e9e9e9;
`;
export const AddComment = styled.input`
  border: none;
  width: Calc(100% - 80px);
  height: 40px;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  width: 80px;
  height: 100%;
  border: none;
  background: none;
  font-size: 12px;
  font-weight: var(--bold-weight);
  color: blue;
  cursor: pointer;
  &:disabled {
    opacity: 25%;
  }
`;
// ADD COMMENT SECTION STOP
