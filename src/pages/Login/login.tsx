import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogoContainer,
  LogoIcon,
} from "../../components/Header/HeaderElements";
import { SubmitButton } from "../../components/SinglePost/SinglePostElements";
import FirebaseContext from "../../context/firebase";
import * as ROUTES from "../../constants/routes";
import {
  LoginSegment,
  LoginContainer,
  LoginImg,
  LogoLogin,
  InputForms,
  SingleInput,
  LoginButton,
  LoginWrapper,
  SingUpSegment,
  BlueBtn,
  ErrorText,
} from "./LoginElements";
const Login = () => {
  const loginPhoto = require("../../img/iphone-with-profile.png");
  const logo = require("../../img/Logo.png");
  const navigate = useNavigate();
  const { firebase }: any = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  // Contact with FIREBASE
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(
        "Sorry, your login or password was incorrect. Please try again."
      );
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <LoginContainer>
      <LoginImg src={loginPhoto} alt="login-photo" />
      <LoginWrapper>
        <LoginSegment>
          <LogoLogin src={logo} alt="logopng" />

          <InputForms onSubmit={handleLogin} method="POST">
            <SingleInput
              type="email"
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
            ></SingleInput>
            <SingleInput
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            ></SingleInput>
            <LoginButton
              disabled={isInvalid}
              type="submit"
              onClick={(e) => handleLogin(e)}
            >
              Log in
            </LoginButton>
          </InputForms>

          {error && <ErrorText>{error}</ErrorText>}
        </LoginSegment>
        <SingUpSegment>
          Don't have an account?{" "}
          <BlueBtn onClick={() => navigate(ROUTES.SIGN_UP)}>Sign up</BlueBtn>
        </SingUpSegment>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
