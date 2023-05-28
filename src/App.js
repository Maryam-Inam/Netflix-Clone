import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/home_screen/HomeScreen";
import Login from "./Components/login_screens/Login";
import Profile from "./Components/profile-screen/Profile";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("hey");
        console.log(userAuth.uid);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        // logged in
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]); // Include 'dispatch' in the dependency array

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route index element={<Login />} />
        ) : (
          <>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="profile" element={<Profile />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
