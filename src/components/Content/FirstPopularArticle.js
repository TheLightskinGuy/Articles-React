import classes from "./FirstPopularArticle.module.css";
import ButtonsInCards from "../UI/ButtonsInCards";

const PopularArticle = ({ data, content, containerClass, imageClass }) => {
  return (
    <div className={classes[containerClass]}>
      <div className={classes.cardContent}>
        <h1>{content ? content?.views : data?.hits[0]?.views}</h1>
        <p>{content ? content?.tags : data?.hits[0]?.tags}</p>
        <div className={classes.cardContentAllign}>
          <div className={classes.allignInfo}>
            <p className={classes.infosName}>
              {content ? content.user : data?.hits[0]?.user}
            </p>
            <p className={classes.infosLikesComm}>
              Likes: {content ? content?.likes : data?.hits[0]?.likes}
            </p>
            <p className={classes.infosLikesComm}>
              Comments: {content ? content?.comments : data?.hits[0]?.comments}
            </p>
          </div>
          <div className={classes.row}>
            <ButtonsInCards class={"big"} />
          </div>
        </div>
      </div>
      <div>
        <img
          className={classes[imageClass]}
          src={content ? content?.webformatURL : data?.hits[0]?.webformatURL}
          alt="Header Banner"
        />
      </div>
    </div>
  );
};

export default PopularArticle;
