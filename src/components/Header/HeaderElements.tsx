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
`;
export const NavigationContainer = styled.div``;
export const Searchbar = styled.input`
  background: var(--additional-color);
  box-shadow: none;
  border: none;
  padding: 10px 16px;
  width: 25%;
  min-width: 180px;
  border-radius: 8px;
`;
