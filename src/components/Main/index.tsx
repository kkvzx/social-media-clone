import React, { lazy, Suspense } from "react";
import GlobalStyles from "../GlobalStyles";
import Header from "../Header";
import { MainWrapper } from "./MainElements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "../../pages/Dashboard/Dashboard";
import * as ROUTES from "../../constants/routes";
import { useAuthListener } from "../../hooks/use-auth-listener";
import UserContext from "../../context/user";

const Login = lazy(() => import("../../pages/Login/login"));
const SingUp = lazy(() => import("../../pages/SignUp/SingUp"));
const Dashboard = lazy(() => import("../../pages/Dashboard/Dashboard"));
const Profile = lazy(() => import("../../pages/Profile"));
const NotFound = lazy(() => import("../../pages/NotFound/notFound"));

const Main = () => {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SingUp />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <GlobalStyles />
    </UserContext.Provider>
  );
};

export default Main;
