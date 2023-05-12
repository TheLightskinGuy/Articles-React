import { BsFillShareFill } from "react-icons/bs";
import { BsFillBookmarksFill } from "react-icons/bs";
import classes from "./ButtonsInCards.module.css";

const ButtonsInCards = (props) => {
  return (
    <div className={classes[`${props.class}`]}>
      <BsFillBookmarksFill className={classes.bookmarkButton}/>
      <BsFillShareFill className={classes.shareButton}/>
    </div>
  );
};

export default ButtonsInCards;
