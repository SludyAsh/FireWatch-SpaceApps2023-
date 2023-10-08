import React from "react";
import ReactDOMClient from "react-dom/client";
import { Sms } from "./screens/Sms";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Sms />);
