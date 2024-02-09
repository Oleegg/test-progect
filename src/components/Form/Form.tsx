import { FormEvent, useState } from "react";
import style from "./Form.module.scss";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, phone, email, text);
  };
  return (
    <form onSubmit={(e) => submitHandler(e)} className={style.form}>
      <label>
        Имя
        <input
          type="text"
          placeholder="Имя"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Почта
        <input
          type="text"
          placeholder="Почта"
          className={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Телефон
        <input
          type="text"
          placeholder="Телефон"
          className={style.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Имя
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button type="submit" className={style.btn}>
        Отправить
      </button>
    </form>
  );
};
