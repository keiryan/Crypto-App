import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  browserHistory,
} from "react-router-dom";
import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import { Container } from "app.styles";
import Home from "pages/Homepage/homepage";
import Coinpage from "pages/Coinpage/coinpage";
import Portfolio from "./pages/Portfolio/portfolio";
import Navbar from "./components/Navbar/navbar";
import { NavBarNotch } from "components/NavBarNotch/navbarnotch";
// import CoinContainer from "./components/CoinContainer/coincontainer";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}
`;

const list = [
  { name: "Bitcoin" },
  { name: "Etherium" },
  { name: "Cardano" },
  { name: "Doge" },
];

const Theme = { primary: "#1F2128", secondary: "#ffffff", tertiary: "#191B1F" };
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Navbar coinList={list} />
          <NavBarNotch
            firstCoin={{ percentage: 44 }}
            secondCoin={{ percentage: 21 }}
            coinValue={Math.random() * 10_000_000_000_000}
            marketCap={Math.random() * 10_000_000_000_000}
            totalAmountOfCoins={(Math.random() * 10000) | 0}
            exchange={(Math.random() * 1000) | 0}
          />
          <Routes>
            <Route exact path="/" element={<Home />}/>
              <Route exact path="portfolio" element={<Portfolio />} />
              <Route exact path="coinpage" element={<Coinpage />} />
          </Routes>
          
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
