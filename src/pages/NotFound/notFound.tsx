import React, { useEffect } from "react";
import { LoginContainer } from "../Login/LoginElements";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found!";
  }, []);  return <LoginContainer>Page not found!</LoginContainer>;
};

export default NotFound;
