import classes from './ModalWrapper.module.css';

const ModalWrapper = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;