import { Dispatch, SetStateAction, useEffect, useState } from "react";
import style from "./Modal.module.scss";
import { Resp } from "../ajax/registr";

const Modal = ({
  data,
  setIsOpen,
}: {
  data: Resp;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h3>Заголовок для модального окна</h3>
        <div
          className={`${style.text} ${
            data.status === "error" ? style.error : ""
          }`}
        >
          {data.message}
        </div>
        <button onClick={() => setIsOpen(false)} className={style.btn}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
