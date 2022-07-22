import React, { lazy, Suspense } from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../Header";
import Hero from "../Hero";
import { MainWrapper } from "./MainElements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "../../pages/Dashboard";
import * as ROUTES from "../../constants/routes";
import SingUp from "../../pages/SingUp";
import Profile from "../../pages/Profile";

const Login = lazy(() => import("../../pages/login"));

const Main = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Feed />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SING_UP} element={<SingUp />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.NOT_FOUND} element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
      <GlobalStyles />
    </>
  );
};

export default Main;
