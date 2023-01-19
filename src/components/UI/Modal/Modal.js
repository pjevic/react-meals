import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const Modal = ({ onClick, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </Fragment>
  );
};

export default Modal;
