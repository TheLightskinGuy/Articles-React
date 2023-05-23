import { useState, useEffect } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { BsFillBookmarksFill } from "react-icons/bs";
import classes from "./ButtonsInCards.module.css";

const ButtonsInCards = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("bookmarkedData");
    if (savedData) {
      const bookmarkedData = JSON.parse(savedData);
      const isItemBookmarked = bookmarkedData.some(
        (item) => item.id === props.data.id
      );
      setIsBookmarked(isItemBookmarked);
    }
  }, [props.data.id]);

  const handleBookmarkClick = () => {
    props.onBookmarkClick(props.data);
  };

  return (
    <div className={classes[`${props.class}`]}>
      <BsFillBookmarksFill
        className={`${classes.bookmarkButton} ${
          isBookmarked ? classes.bookmarkButtonActive : ""
        }`}
        onClick={handleBookmarkClick}
      />
      <BsFillShareFill className={classes.shareButton} />
    </div>
  );
};

export default ButtonsInCards;
