import React from "react";
import headerImg from "../assets/headerImg.png";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.bannerContainer}>
      <img className={classes.bannerImage} src={headerImg} alt="Header Banner" />
      <div className={classes.bannerContent}>
        <h2>Blog Afrianska</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Banner;
