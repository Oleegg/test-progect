import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Modal.scss";
import { Resp } from "../ajax/registr";

const Modal = ({
  data,
  setIsOpen,
  isOpen,
}: {
  data: Resp;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("scroll");
    } else {
      body.classList.remove("scroll");
    }
  }, [isOpen]);

  return (
    <div className={isOpen ? "modal show" : "modal"}>
      <div className="modal__content">
        <h3>Заголовок для модального окна</h3>
        {data ? (
          <div
            className={`$'text' ${
              data.status === "error" ? "modal__error" : ""
            }`}
          >
            {data.message}
          </div>
        ) : null}
        <button onClick={() => setIsOpen(false)} className="modal__btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
