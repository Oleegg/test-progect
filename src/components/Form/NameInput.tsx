import { Dispatch, SetStateAction } from "react";
import style from "./Form.module.scss";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
};

export const NameInput = ({ name, setName, isValid, setIsValid }: Props) => {
  const nameValidation = () => {
    if (name.length < 2) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <label onBlur={nameValidation}>
      Имя
      <input
        type="text"
        placeholder="Имя"
        className={`${style.input} ${isValid ? "" : style.input__error}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className={style.text__error}>
        {isValid ? "" : "Введите имя длиннее 2 символов"}
      </div>
    </label>
  );
};
