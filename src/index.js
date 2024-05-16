import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./app.js";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'; 

Amplify.configure(awsconfig);

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);