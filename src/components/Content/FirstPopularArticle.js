import classes from "./FirstPopularArticle.module.css";
import ButtonsInCards from "../UI/ButtonsInCards";

const PopularArticle = ({
  data,
  containerClass,
  imageClass,
  rowClass,
  onClick,
}) => {
  return (
    <div className={classes[containerClass]}>
      <div className={classes.cardContent}>
        <h1>{data?.views}</h1>
        <p>{data?.tags}</p>
        <div className={classes.cardContentAllign}>
          <div className={classes.allignInfo}>
            <p className={classes.infosName}>{data?.user}</p>
            <p className={classes.infosLikesComm}>Likes: {data?.likes}</p>
            <p className={classes.infosLikesComm}>Comments: {data?.comments}</p>
          </div>
          <div className={classes[rowClass]}>
            <ButtonsInCards class={"big"} />
          </div>
        </div>
      </div>
      <div>
        <img
          onClick={onClick}
          className={classes[imageClass]}
          src={data?.webformatURL}
          alt="Header Banner"
        />
      </div>
    </div>
  );
};

export default PopularArticle;
