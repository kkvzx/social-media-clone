import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-background);
`;
export const LoginImg = styled.img`
  width: 380px;
  margin-right: 32px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
export const LoginWrapper = styled.div`
  width: 350px;
  height: 897px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LoginSegment = styled.div`
  width: 350px;
  /* height: 350px; */
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--header-background);
  border: 1px solid var(--shadows-color);
`;
export const LogoLogin = styled.img`
  width: 175px;
  margin: 32px 0;
`;
export const InputForms = styled.form`
  text-align: center;
`;
export const SingleInput = styled.input`
  width: 258px;
  height: 36px;
  margin: 4px;
  padding: 9px 0 7px 8px;
  border: 1px solid var(--shadows-color);
  border-radius: 4px;
  background: #fbfbfb;
  &:focus {
    outline: 1px solid #a9a9a9;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;
export const LoginButton = styled.button`
  width: 258px;
  height: 30px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  background: var(--secondary-color);
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
export const ErrorText = styled.p`
  margin: 8px 32px;
  color: red;
  font-weight: 400;
  font-size: 14px;
`;
export const SingUpSegment = styled(LoginSegment)`
  width: 350px;
  height: auto;
  display: inline;
  text-align: center;
  font-size: 15px;
  padding: 20px 0;
  margin-top: 16px;
`;
export const BlueBtn = styled.button`
  color: var(--secondary-color);
  background: none;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
