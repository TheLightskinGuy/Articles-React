import classes from "./SecondRowArticles.module.css";
import ButtonsInCards from "../UI/ButtonsInCards";

const SecondRowArticles = ({ data, onClick, onBookmarkClick }) => {
  return (
    <div className={classes.medium_container}>
      <img
        onClick={onClick}
        className={classes.image}
        src={data?.webformatURL}
        alt="Header Banner"
      />
      <div className={classes.cardContent}>
        <h1>{data?.views}</h1>
        <p>{data?.tags}</p>
        <div className={classes.cardContentAllign}>
          <div className={classes.allignInfo}>
            <p className={classes.infosName}>{data?.user}</p>
            <p className={classes.infosLikesComm}>Likes: {data?.likes}</p>
            <p className={classes.infosLikesComm}>Comments: {data?.comments}</p>
          </div>
          <div className={classes.row}>
            <ButtonsInCards class={"big"} data={data} onBookmarkClick={onBookmarkClick}/>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SecondRowArticles;
