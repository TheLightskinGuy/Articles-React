import ContainerCard from "../UI/ContainerCard";
import ButtonsInCards from "../UI/ButtonsInCards";
import classes from "./AllArticles.module.css";

const AllArticles = ({ data, onBookmarkClick, showButtons }) => {
  return (
    <ContainerCard>
      <div className={classes.container}>
        <div>
          <img
            className={classes.image}
            src={data?.webformatURL}
            alt="Header Banner"
          />
        </div>
        <div className={classes.cardContent}>
          <h1>{data?.views}</h1>
          <p>{data?.tags}</p>
          <div className={classes.cardContentAllign}>
            <div className={classes.allignInfo}>
              <p className={classes.infosName}>{data?.user}</p>
              <p className={classes.infosLikesComm}>Likes: {data?.likes}</p>
              <p className={classes.infosLikesComm}>
                Comments: {data?.comments}
              </p>
            </div>
            <div className={classes.row}>
              {showButtons && (
                <ButtonsInCards
                  class={"big"}
                  data={data}
                  onBookmarkClick={onBookmarkClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default AllArticles;
