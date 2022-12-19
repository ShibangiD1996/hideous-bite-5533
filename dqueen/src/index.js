import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import CartContextProvider from "./Components/Context/CartContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import AuthContextProvider from "./Components/Context/AuthContext";

import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthContextProvider>
  <ChakraProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </ChakraProvider>
  // </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
