import React from "react";
import ReactDOM from "react-dom/client";
// redux
import { store } from "./store/store";
import { Provider } from "react-redux";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/css/index.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import reportWebVitals from "./reportWebVitals";

// pages
import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
