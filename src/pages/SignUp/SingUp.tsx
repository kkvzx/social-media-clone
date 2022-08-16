import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
} from "../Login/LoginElements";
import { doesUsernameExist } from "../../services/firebase";
const SignUp = () => {
  const loginPhoto = require("../../img/iphone-with-profile.png");
  const logo = require("../../img/Logo.png");
  const navigate = useNavigate();
  const { firebase }: any = useContext(FirebaseContext);
  // user data containers -> will be send to firebase
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  // error handling
  const [error, setError] = useState("");
  const isInvalid =
    password === "" ||
    emailAddress === "" ||
    fullName === "" ||
    username === "";

  // Contact with FIREBASE
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // ->emailaddress&password&username(displayName)
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // firebase user collection (create a document)
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          description: "",
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          dataCreated: Date.now(),
        });
        navigate(ROUTES.DASHBOARD);
      } catch (error: any) {
        setEmailAddress("");
        setFullName("");
        setUsername("");
        setError(error.message);
      }
    } else {
      setError("that username is already taken, please try another");
    }
  };

  useEffect(() => {
    document.title = "Sing Up - Instagram";
  }, []);

  return (
    <LoginContainer>
      <LoginImg src={loginPhoto} alt="login-photo" />

      <LoginWrapper>
        <LoginSegment>
          <LogoLogin src={logo} alt="logopng" />

          <InputForms onSubmit={handleSignUp} method="POST">
            <SingleInput
              type="email"
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            ></SingleInput>
            <SingleInput
              type="text"
              placeholder="Full Name"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <SingleInput
              type="text"
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <SingleInput
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <LoginButton
              disabled={isInvalid}
              type="submit"
              onClick={(e) => handleSignUp(e)}
            >
              Sign Up
            </LoginButton>
          </InputForms>

          {error && <ErrorText>{error}</ErrorText>}
        </LoginSegment>
        <SingUpSegment>
          Already have an accout?{" "}
          <BlueBtn onClick={() => navigate(ROUTES.LOGIN)}>Sign in</BlueBtn>
        </SingUpSegment>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default SignUp;
