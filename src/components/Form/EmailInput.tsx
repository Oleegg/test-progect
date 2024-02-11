import { Dispatch, SetStateAction } from "react";
import style from "./Form.module.scss";

type Props = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
};

export const EmailInput = ({ email, setEmail, isValid, setIsValid }: Props) => {
  const emailValidation = () => {
    const rgExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (rgExp.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <label onBlur={emailValidation}>
      Почта
      <input
        type="email"
        placeholder="Почта"
        className={`${style.input} ${isValid ? "" : style.input__error}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className={style.text__error}>
        {isValid ? "" : "Введите правильный адрес електронной почты"}
      </div>
    </label>
  );
};
