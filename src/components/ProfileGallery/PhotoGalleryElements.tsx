import styled from "styled-components";

export const PhotoGalleryWrapper = styled.div`
  max-width: 975px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, 293px));
  grid-gap: 18px;
`;
export const AllPhotos = styled.div`
  /* position: absolute;
  justify-content: center;
  align-items: center;
  background: green;
  margin-top: 10px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 300px)); */
`;

export const SinglePhoto = styled.img`
  width: 100%;
  height: 293px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;
export const NothingThere = styled.div`
  width: 100%;
  text-align: center;
  grid-column-start: 0;
  grid-column-end: 3;
`;
