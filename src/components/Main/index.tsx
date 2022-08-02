import { lazy, Suspense } from "react";
import GlobalStyles from "../GlobalStyles";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useAuthListener } from "../../hooks/use-auth-listener";
import UserContext from "../../context/user";

const Login = lazy(() => import("../../pages/Login/login"));
const SingUp = lazy(() => import("../../pages/SignUp/SingUp"));
const Dashboard = lazy(() => import("../../pages/Dashboard/Dashboard"));
const Profile = lazy(() => import("../../pages/Profile/Profile"));
const NotFound = lazy(() => import("../../pages/NotFound/notFound"));
const PhotoPage = lazy(() => import("../../pages/PhotoPage/photoPage"));

const Main = () => {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path={ROUTES.DASHBOARD}
              element={user ? <Dashboard /> : <Navigate to={ROUTES.LOGIN} />}
            />
            <Route
              path={ROUTES.LOGIN}
              element={user ? <Navigate to={ROUTES.DASHBOARD} /> : <Login />}
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={user ? <Navigate to={ROUTES.DASHBOARD} /> : <SingUp />}
            />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route path={ROUTES.PHOTO_PAGE} element={<PhotoPage />} />
          </Routes>
        </Suspense>
      </Router>
      <GlobalStyles />
    </UserContext.Provider>
  );
};

export default Main;
