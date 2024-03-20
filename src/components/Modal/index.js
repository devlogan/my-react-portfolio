import React, { Fragment } from "react";
import Card from "../Card";
import "./index.css";
import { useModalContext } from "../../context/modalContext";
const Modal = ({ className, children }) => {
  const { closeModalHandler, showModal } = useModalContext();
  return (
    showModal && (
      <Fragment>
        <section id="backdrop" onClick={closeModalHandler}></section>
        <Card className={className}>{children}</Card>
      </Fragment>
    )
  );
};

export default Modal;
