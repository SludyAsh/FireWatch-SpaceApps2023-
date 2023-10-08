import React from "react";
import ReactDOMClient from "react-dom/client";
import { Inicio } from "./screens/Inicio";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Inicio />);
