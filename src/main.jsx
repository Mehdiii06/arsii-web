import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./styles/main.scss";
import QueryProvider from "./providers/QueryProvider.jsx";
import { I18nProvider } from "./lib/I18nProvider.jsx";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <I18nProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nProvider>
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);
