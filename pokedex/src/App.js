import { React, useEffect } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./constants/GlobalStyle";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./contexts/GlobalState";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
