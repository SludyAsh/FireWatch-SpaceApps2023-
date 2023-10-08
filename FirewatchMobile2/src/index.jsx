import React from "react";
import ReactDOMClient from "react-dom/client";
import { Squeleton } from "./screens/Squeleton";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Squeleton />);
