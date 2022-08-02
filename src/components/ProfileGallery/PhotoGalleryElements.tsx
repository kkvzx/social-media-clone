import styled from "styled-components";

export const PhotoGalleryWrapper = styled.div`
  max-width: 975px;
  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, 300px));
  grid-gap: 10px;
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
  height: 300px;
  object-fit: cover;
  object-position: center;
`;
