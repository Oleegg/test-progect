import { Dispatch, SetStateAction } from "react";
import style from "./Form.module.scss";
import { IMaskInput } from "react-imask";

type Props = {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
};

export const PhoneInput = ({ phone, setPhone, isValid, setIsValid }: Props) => {
  const emailValidation = () => {
    if (phone.length < 12) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <label onBlur={emailValidation}>
      Телефон
      <IMaskInput
        className={`${style.input} ${isValid ? "" : style.input__error}`}
        mask="+{000}(00)000-00-00"
        radix="."
        value={phone}
        unmask={true}
        onAccept={(value, mask) => setPhone(value)}
        placeholder="+___(__)___-__-__"
      />
      <div className={style.text__error}>
        {isValid ? "" : "Введите номер телефона в формате +111(11)111-11-11"}
      </div>
    </label>
  );
};
