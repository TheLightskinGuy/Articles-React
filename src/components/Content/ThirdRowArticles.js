import ButtonsInCards from "../UI/ButtonsInCards";
import classes from "./ThirdRowArticles.module.css";

const SecondRowArticles = (props) => {
  return (
    <div className={classes.smallContainer}>
      <div>
        <img className={classes.image} src={props.image} alt="Header Banner2" />
      </div>
      <div className={classes.smallCardContent}>
        <h1>Dolor else situm ametus</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={classes.cardContentAllign}>
          <div className={classes.allignInfo}>
            <p className={classes.infosName}>Veronica Micle</p>
            <p className={classes.infosLikesComm}>May 5, 3 min read</p>
          </div>
          <div className={classes.secondRow}>
            <ButtonsInCards class={"small"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondRowArticles;
