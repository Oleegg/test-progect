import { Form } from "../Form/Form";
import style from "./App.module.scss";

export const App = () => {
  return (
    <>
      <header>
        <h1 className={style.title}>Test</h1>
      </header>
      <main>
        <Form />
      </main>
    </>
  );
};
