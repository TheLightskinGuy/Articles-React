import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SecondRowArticles from "../SecondRowArticles";
import ThirdRowArticles from "../ThirdRowArticles";
import FourthRowArticles from "../FourthRowArticles";
import classes from "./PopularMain.module.css";
import ContainerCard from "../../UI/ContainerCard";
import TestImg from "../../assets/TestImg.png";
import TestImg2 from "../../assets/TestImg2.png";
import TestImg3 from "../../assets/TestImg3.png";
import TestImg4 from "../../assets/TestImg4.png";
import ButtonsInCards from "../../UI/ButtonsInCards";
import AllArticles from "./AllArticles";

const PopularMain = () => {
  const [showArticles, setShowArticles] = useState(false);

  const articlesHandler = () => {
    setShowArticles(!showArticles);
  };

  return (
    <ContainerCard>
      <div className={classes.header}>
        <h3>POPULAR</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.cardContent}>
          <h1>Lorem Ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
            posuere nibh tempor fringilla porta pellentesque ipsum.
          </p>
          <div className={classes.cardContentAllign}>
            <div className={classes.allignInfo}>
              <p className={classes.infosName}>Veronica Micle</p>
              <p className={classes.infosLikesComm}>May 5, 3 min read</p>
            </div>
            <div className={classes.row}>
              <ButtonsInCards class={"big"} />
            </div>
          </div>
        </div>
        <div>
          <img className={classes.image} src={TestImg} alt="Header Banner" />
        </div>
      </div>

      <div className={classes.container}>
        <SecondRowArticles image={TestImg2} />
        <SecondRowArticles image={TestImg3} />
        <SecondRowArticles image={TestImg4} />
      </div>
      {showArticles && (
        <div className={classes.container}>
          <ThirdRowArticles image={TestImg4} />
          <ThirdRowArticles image={TestImg4} />
          <ThirdRowArticles image={TestImg4} />
          <ThirdRowArticles image={TestImg4} />
        </div>
      )}
      {showArticles && (
        <div className={classes.container}>
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
        </div>
      )}
      {showArticles && (
        <div className={classes.container}>
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
          <FourthRowArticles image={TestImg4} />
        </div>
      )}

      <div className={classes.seeMoreArticles}>
        <p onClick={articlesHandler}>
          {showArticles ? "HIDE ALL ARTICLES" : "SEE ALL POPULAR ARTICLES"}
        </p>
      </div>
      <div className={classes.horizontalLine}></div>
      <div className={classes.header}>
        <h3>ALL ARTICLE</h3>
      </div>
      <>
        <AllArticles image={TestImg} />
        <AllArticles image={TestImg} />
        <AllArticles image={TestImg} />
        <AllArticles image={TestImg} />
        <AllArticles image={TestImg} />
      </>

      <div className={classes.prevButtons}>
        <button className={classes.button}>
          <FaArrowLeft />
          <span className={classes.buttonText}>Old Post</span>
        </button>
        <button className={classes.button}>
          <span className={classes.buttonText}>New Post</span>
          <FaArrowRight />
        </button>
      </div>
    </ContainerCard>
  );
};

export default PopularMain;
