import styled from "styled-components";

export const HeaderOfProfileWrapper = styled.div`
  display: flex;
  width: 975px;
  max-height: 240px;
  padding: 20px 40px;
  margin-top: 90px;
  align-items: flex-start;
  border-bottom: 1px solid var(--shadows-color);
`;
export const MainAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  grid-row-start: 0;
  grid-row-end: 3;
`;
export const Content = styled.div`
  height: 100%;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Bold = styled.span`
  font-weight: var(--bold-weight);
`;
export const Username = styled.p`
  font-size: 1.6rem;
  color: var(--font-color);
  display: block;
  margin-right: 16px;
`;
export const EditProfileButton = styled.button`
  background: none;
  color: var(--font-color);
  width: 90px;
  padding: 4px 0px;
  cursor: pointer;
  border: 1px solid var(--shadows-color);
  font-weight: var(--bold-weight);
`;
export const Row = styled.div`
  display: flex;
`;
export const Number = styled.p`
  margin: 20px 20px 20px 0;
`;
export const FullName = styled.p``;
export const ProfilDescription = styled.p``;
