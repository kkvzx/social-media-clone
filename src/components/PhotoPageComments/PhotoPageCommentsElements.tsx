import styled from "styled-components";

export const PhotoPageCommentsContainer = styled.div`
  width: 337px;
  height: 521px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`;
export const PhotoPageHeader = styled.div`
  height: 60px;
  width: 100%;
  background: var(--header-background);
`;
export const PhotoPageCommentsSection = styled.div`
  padding-top: 20px;
  flex: 1;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
export const PhotoPageActions = styled.div``;
export const CommentContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 5px;
  color: black;
  display: grid;
  grid-template-columns: 0.15fr 0.8fr;
  &.noComments {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const TextContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  font-size: 12px;
  font-weight: var(--regular-weight);
`;
