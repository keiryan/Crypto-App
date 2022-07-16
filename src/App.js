import "App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  browserHistory,
} from "react-router-dom";
import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import { Container } from "app.styles";
import { Home, Portfolio, CoinPage } from "pages";
import {NavBarNotch, Navbar} from "components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.quaternary}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.primary}
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 8px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

const list = [
  { name: "Bitcoin" },
  { name: "Etherium" },
  { name: "Cardano" },
  { name: "Doge" },
];

const Theme = { primary: "#1F2128", secondary: "#ffffff", tertiary: "#191B1F", quaternary: "#2C2F36", quinary: '#191B1F'};
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
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="coinpage" element={<CoinPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
