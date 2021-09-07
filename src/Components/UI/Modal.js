import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { ReactDOM } from "react";
// import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {/* without Portal */}
      {/* <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {/* with Portal to make sure HTML code is not all over the place */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
