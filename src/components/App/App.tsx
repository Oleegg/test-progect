import { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import "./App.scss";
import Modal from "../Modal/Modal";
import { Resp } from "../ajax/registr";

export const App = () => {
  const [data, setData] = useState<Resp>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setIsOpen(true);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <Modal data={data} setIsOpen={setIsOpen} isOpen={isOpen} />
      <header>
        <h1 className="title">Test</h1>
      </header>
      <main>
        <Form setData={setData} />
      </main>
      <footer className="footer">
        <button
          className="button"
          onClick={() => {
            setIsOpen(true);
            setData({
              status: "string",
              message: "Случайный текст для модального окна",
            });
          }}
        >
          Открыть модальное окно
        </button>
      </footer>
    </div>
  );
};
