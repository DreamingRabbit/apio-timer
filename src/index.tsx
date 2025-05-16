import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import 'antd/dist/antd.min.css';

import Router from "./router";
import i18n from "./translation";
import { LoginProvider } from "./contexts/LoginContext";
import { Styles } from "./styles/styles";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18n}>
        <LoginProvider>
          <Styles /> 
          <Router />
        </LoginProvider>
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);