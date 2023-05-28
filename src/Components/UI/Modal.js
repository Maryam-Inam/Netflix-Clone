import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClose={props.onClose}></div>;
};
const portalElement = document.getElementById("Overlays");
function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
