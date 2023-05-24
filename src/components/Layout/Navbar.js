import { useState, useEffect } from "react";
import { SiLydia } from "react-icons/si";
import { BsFillBookmarkFill } from "react-icons/bs";
import classes from "./Navbar.module.css";
import Banner from "./Banner";
import ModalWrapper from "../UI/ModalWrapper";
import AllArticles from "../Content/AllArticles";

const Navbar = ({ bookmarkedData, onBookmarkClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("bookmarkedData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleLocalBookmarkClick = (item) => {
    onBookmarkClick(item);
  };

  return (
    <>
      {isModalOpen && (
        <ModalWrapper
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showArrow={false}
        >
          <div className={classes.ArticleComponent}>
            {bookmarkedData.length > 0 ? (
              bookmarkedData.map((item, index) => (
                <AllArticles
                  key={index}
                  data={item}
                  onBookmarkClick={handleLocalBookmarkClick}
                />
              ))
            ) : (
              <p className={classes.noFavoritesData}>
                THERE ARE NO SAVED ARTICLES, TRY TO ADD SOME FROM HOMEPAGE
              </p>
            )}
          </div>
        </ModalWrapper>
      )}
      <div className={classes.nav}>
        <SiLydia className={classes.icons} />
        <BsFillBookmarkFill
          className={classes.icons}
          onClick={handleOpenModal}
        />
      </div>
      <Banner />
    </>
  );
};

export default Navbar;
