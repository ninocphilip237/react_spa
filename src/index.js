import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";
import "./index.css";
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <Main/>,

);
// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
// https://www.codingdeft.com/posts/react-dom-render-not-supported-react-18/
