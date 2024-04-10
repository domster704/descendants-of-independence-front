import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App";

import store from "./store/store";

import "./style.css";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18next.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={"Loading..."}>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </I18nextProvider>
  </Suspense>
);
