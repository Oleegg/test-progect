import { Dispatch, SetStateAction, useState } from "react";
import style from "./Form.module.scss";

type Props = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
};

export const Textarea = ({ text, setText, isValid, setIsValid }: Props) => {
  const nameValidation = () => {
    if (!text) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <label onBlur={nameValidation} className={style.textarea}>
      Имя
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`${style.input} ${isValid ? "" : style.input__error}`}
      />
      <div className={style.text__error} style={{ color: "red" }}>
        {isValid ? "" : "Обязательное поле"}
      </div>
    </label>
  );
};
