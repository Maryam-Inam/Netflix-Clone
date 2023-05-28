import React from "react";
import NavBar from "../home_screen/NavBar";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const signOutHandler = () => {
    auth.signOut();
    navigate("/");
  };
  const plan = (type, quality) => {
    return (
      <div className={classes.plan_contents}>
        <h4>
          <span>{type}</span>
          <span>{quality}</span>
        </h4>
        <button>Subscribe</button>
      </div>
    );
  };
  return (
    <div className={classes.profile}>
      <NavBar />
      <div className={classes.profile_body}>
        <h1>Edit Profile</h1>
        <div className={classes.profile_info}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReN65bXZE0Y3xTfat_rVy3e8foWfxk7k-SVppTu4sgoeN9PmAI65MjrcaeopsbO376Xn6T3r0bDFI&usqp=CAU&ec=48665701"
            alt="avatar"
          />
          <div className={classes.profile_details}>
            <h2>{user.email}</h2>
            <div className={classes.profile_plans}>
              <h3>Plans</h3>
              {plan("Premium", "4K + HDR")}
              {plan("Basic", "720p")}
              {plan("Standard", "1080p")}
              <button
                onClick={signOutHandler}
                className={classes.profile_signout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
