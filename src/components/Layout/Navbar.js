import { useState, useEffect } from "react";
import { SiLydia } from "react-icons/si";
import { BsFillBookmarkFill } from "react-icons/bs";
import classes from "./Navbar.module.css";
import Banner from "./Banner";
import ModalWrapper from "../UI/ModalWrapper";
import AllArticles from "../Content/AllArticles";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

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
    setShowButtons(false);
    setShowArrows(false);
  };

  return (
    <>
      {isModalOpen && (
        <ModalWrapper
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showArrow={showArrows}
        >
          <div className={classes.ArticleComponent}>
            {data.map((item, index) => (
              <AllArticles data={item} key={index} showButtons={showButtons} />
            ))}
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
