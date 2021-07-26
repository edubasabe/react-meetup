import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <ChakraProvider>
    <FavoritesContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FavoritesContextProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
