import { Photo, PhotosContainer } from "./SinglePostElements";

const PhotoSection = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <PhotosContainer>
      <Photo src={imageSrc} alt="?" />
    </PhotosContainer>
  );
};

export default PhotoSection;
