import { useEffect } from "react";
import classes from "./ModalWrapper.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ModalWrapper = ({
  isOpen,
  onClose,
  children,
  handlePrevClick,
  handleNextClick,
  showArrow,
}) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.arrowsWrapper}>
        {showArrow && (
          <div className={classes.leftArrow}>
            <IoIosArrowBack
              className={classes.arrowIcon}
              onClick={handlePrevClick}
            />
          </div>
        )}
        <div className={classes.modalContainer}>
          <div className={classes.modal}>
            <button className={classes.closeButton} onClick={onClose}>
              X
            </button>
            <div className={classes.modalContent}>{children}</div>
          </div>
        </div>
        {showArrow && (
          <div className={classes.rightArrow}>
            <IoIosArrowForward
              className={classes.arrowIcon}
              onClick={handleNextClick}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ModalWrapper;
