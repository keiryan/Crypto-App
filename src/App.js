import "App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Container } from "app.styles";
import { Home, Portfolio, CoinPage, Coin, Lost } from "pages";
import { Navbar } from "components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.quaternary};
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  position: absolute;
  width: 10px;
  z-index: 999;
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
  { name: "btc" },
  { name: "eth" },
  { name: "ada" },
  { name: "doge" },
];

const Theme = {
  primary: "#1F2128",
  secondary: "#ffffff",
  tertiary: "#191B1F",
  quaternary: "#2C2F36",
  quinary: "#191B1F",
  progressBar: {
    color: "#fff",
    background: "#2172E5",
  },
  chart: {
    bars: "#2172E5",
    line: {
      large: "#FF6384",
      small: "#FF6384",
    },
  },
  number: {
    up: "lime",
    down: "red",
  },
};

const InvertTheme = {
  primary: "#C1D7AE",
  secondary: "#000",
  tertiary: "#EBEBEB",
  quaternary: "#3A6EA5",
  quinary: "#8CC084",
  progressBar: {
    color: "#FFCAB1",
    background: "#E8B8A1",
  },
  chart: {
    bars: "#2172E5",
    line: {
      large: "#F7B394",
      small: "#8CC084",
    },
  },
  number: {
    up: "#649200",
    down: "#FF2C53",
  },
};

export default class App extends React.Component {
  state = {
    theme: Theme,
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === Theme ? InvertTheme : Theme,
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <BrowserRouter>
          <Container>
            <GlobalStyle />
            <Navbar
              firstCoin={{ percentage: 44 }}
              secondCoin={{ percentage: 21 }}
              coinValue={Math.random() * 10_000_000_000_000}
              marketCap={Math.random() * 10_000_000_000_000}
              totalAmountOfCoins={(Math.random() * 10000) | 0}
              exchange={(Math.random() * 1000) | 0}
              coinList={list}
              toggleTheme={this.toggleTheme}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="coinpage" element={<CoinPage />} />
              <Route path="coin/:id" element={<Coin />} />
              <Route path="*" element={<Lost />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
