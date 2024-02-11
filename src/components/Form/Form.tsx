import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import style from "./Form.module.scss";
import { PhoneInput } from "./PhoneInput";
import { EmailInput } from "./EmailInput";
import { NameInput } from "./NameInput";
import { Textarea } from "./Textarea";
import { Ajax } from "../ajax/registr";

type Props = {
  setData: Dispatch<SetStateAction<any>>;
};

export const Form = ({ setData }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidText, setIsValidText] = useState(true);
  const [isError, setIsError] = useState(true);

  const errorHandler = () => {
    if (name && email && phone && text) {
      if (isValidName && isValidEmail && isValidPhone && isValidText) {
        setIsError(false);
      }
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    errorHandler();
  }, [
    name,
    email,
    phone,
    text,
    isValidName,
    isValidEmail,
    isValidPhone,
    isValidText,
  ]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setText("");
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    errorHandler();
    if (isError) {
      console.log("err");
    } else {
      const data = { name, email, phone, text };
      console.log("&&&&&&", data);

      const ajax = new Ajax();
      const resp = ajax.logIn(data);
      resp
        .then((res) => {
          if (res) {
            setData(res);
            if (res.status === "success") {
              resetForm();
            }
          }
        })
        .catch((err) => console.log("error....", err));
    }
  };
  return (
    <form onSubmit={(e) => submitHandler(e)} className={style.form}>
      <NameInput
        name={name}
        setName={setName}
        isValid={isValidName}
        setIsValid={setIsValidName}
      />
      <EmailInput
        email={email}
        setEmail={setEmail}
        isValid={isValidEmail}
        setIsValid={setIsValidEmail}
      />
      <PhoneInput
        phone={phone}
        setPhone={setPhone}
        isValid={isValidPhone}
        setIsValid={setIsValidPhone}
      />
      <Textarea
        text={text}
        setText={setText}
        isValid={isValidText}
        setIsValid={setIsValidText}
      />
      <button type="submit" className={style.btn} disabled={isError}>
        Отправить
      </button>
    </form>
  );
};
