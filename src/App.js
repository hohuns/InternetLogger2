import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import MessageLogEn from "./pages/MessageLogEn";
import MessageLogKr from "./pages/MessageLogKr";
import SignIn from "./pages/SignIn";
import ChangePassword from "./pages/ChangePassword";
import HomePageEn from "./pages/HomePageEn";
import HomePageKr from "./pages/HomePageKr";
import ChangeUserName from "./pages/ChangeUserName";
import InitialPage from "./pages/InitialPage";
import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "./store/userSlice";

function App() {
  const reduxIsLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem("token");
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  const storedUser = localStorage.getItem("user");

  useEffect(() => {
    if (storedIsLoggedIn) {
      dispatch(usersActions.updateIdToken(storedToken));
      dispatch(usersActions.updateUser(storedUser));
      dispatch(usersActions.updateIsLoggedIn(storedIsLoggedIn));
    }
  }, [storedToken, storedIsLoggedIn, storedUser]);

  return (
    <Layout>
      <Routes>
        {storedIsLoggedIn ? (
          <Route path="*" element={<Navigate to="/initialpage" />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        {!storedIsLoggedIn && <Route path="/login" element={<Login></Login>} />}
        {storedIsLoggedIn && (
          <Route path="/initialpage" element={<InitialPage></InitialPage>} />
        )}
        {!storedIsLoggedIn && (
          <Route path="/signin" element={<SignIn></SignIn>} />
        )}
        {reduxIsLoggedIn && (
          <Route path="/msglogen" element={<MessageLogEn></MessageLogEn>} />
        )}
        {reduxIsLoggedIn && (
          <Route path="/msglogkr" element={<MessageLogKr></MessageLogKr>} />
        )}
        {reduxIsLoggedIn && (
          <Route path="/hompageen" element={<HomePageEn></HomePageEn>} />
        )}
        {reduxIsLoggedIn && (
          <Route path="/hompagekr" element={<HomePageKr></HomePageKr>} />
        )}
        {reduxIsLoggedIn && (
          <Route
            path="/updateusername"
            element={<ChangeUserName></ChangeUserName>}
          />
        )}
        {reduxIsLoggedIn && (
          <Route
            path="/changepassword"
            element={<ChangePassword></ChangePassword>}
          />
        )}
      </Routes>
    </Layout>
  );
}

export default App;
