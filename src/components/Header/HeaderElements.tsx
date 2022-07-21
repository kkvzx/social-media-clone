import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: var(--header-background);
  box-shadow: 1px 1px 1px 1px var(--shadows-color);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderElements = styled.div`
  width: 100%;
  max-width: 975px;
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoContainer = styled.div`
  font-size: 16px;
  width: 280px;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const LogoIcon = styled.img`
  width: 100px;
`;
export const NavigationContainer = styled.div`
  width: 280px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SingleIcon = styled.img`
  width: 21px;
  height: 21px;
`;

export const Searchbar = styled.input`
  background: var(--additional-color);
  box-shadow: none;
  border: none;
  padding: 10px 16px;
  width: 25%;
  min-width: 180px;
  border-radius: 8px;
`;
