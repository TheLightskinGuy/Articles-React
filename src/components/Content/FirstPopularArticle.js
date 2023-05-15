import classes from "./FirstPopularArticle.module.css";
import ButtonsInCards from "../UI/ButtonsInCards";

const PopularArticle = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.cardContent}>
        <h1>{data?.hits[0]?.views}</h1>
        <p>{data?.hits[0]?.tags}</p>
        <div className={classes.cardContentAllign}>
          <div className={classes.allignInfo}>
            <p className={classes.infosName}>{data.hits[0].user}</p>
            <p className={classes.infosLikesComm}>
              Likes: {data.hits[0].likes}
            </p>
            <p className={classes.infosLikesComm}>
              Comments: {data.hits[0].comments}
            </p>
          </div>
          <div className={classes.row}>
            <ButtonsInCards class={"big"} />
          </div>
        </div>
      </div>
      <div>
        <img
          className={classes.image}
          src={data?.hits[0]?.webformatURL}
          alt="Header Banner"
        />
      </div>
    </div>
  );
};

export default PopularArticle;
