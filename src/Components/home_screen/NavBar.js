import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";
function NavBar() {
  const navigate = useNavigate();
  const [showNavClr, setShowNavClr] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavClr(true);
    } else {
      setShowNavClr(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={showNavClr ? classes.nav : classes.nav__contents}>
      <div className={classes.nav__contents}>
        <img
          className={classes.nav__logo}
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt="navbar"
          onClick={() => navigate("/")}
        />
        <img
          className={classes.nav__avatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReN65bXZE0Y3xTfat_rVy3e8foWfxk7k-SVppTu4sgoeN9PmAI65MjrcaeopsbO376Xn6T3r0bDFI&usqp=CAU&ec=48665701"
          alt=""
          onClick={() => navigate("/Profile")}
        />
      </div>
    </div>
  );
}

export default NavBar;
