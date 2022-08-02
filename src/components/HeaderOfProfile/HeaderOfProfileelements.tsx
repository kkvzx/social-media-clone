import styled from "styled-components";

export const HeaderOfProfileWrapper = styled.div`
  display: flex;
  width: 975px;
  max-height: 190px;
  padding: 20px 125px 30px;
  margin: 90px 0 30px 0;
  align-items: flex-start;
  border-bottom: 1px solid var(--shadows-color);
`;
export const MainAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
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
  &.follow {
    background: var(--secondary-color);
    color: white;
  }
`;
export const Row = styled.div`
  display: flex;
`;
export const Number = styled.p`
  margin: 20px 20px 20px 0;
`;
export const FullName = styled.p``;
export const ProfilDescription = styled.p``;
