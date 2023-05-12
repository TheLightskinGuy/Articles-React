import ContainerCard from "../../UI/ContainerCard";
import ButtonsInCards from "../../UI/ButtonsInCards";
import classes from "./AllArticles.module.css";

const AllArticles = (props) => {
  return (
    <ContainerCard>
      <div className={classes.container}>
        <div>
          <img
            className={classes.image}
            src={props.image}
            alt="Header Banner"
          />
        </div>
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
      </div>
    </ContainerCard>
  );
};

export default AllArticles;
