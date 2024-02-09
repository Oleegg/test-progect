import "./style.scss";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";

const root = document.getElementById("root");

if (!root) throw new Error("not find root");

const container = createRoot(root);

container.render(<App />);
