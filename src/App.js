import "App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Container, MiddleContainer } from "app.styles";
import { Home, Portfolio, CoinPage, Coin, Lost } from "pages";
import { BottomBar, Navbar } from "components";
import axios from "axios";

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
    bar: {
      color: "#2172E5",
      backgroundColor: "#2172E5",
    },
    line: {
      color: "#FF6384",
      backgroundColor: "rgba(255, 99, 132, 0.1)",
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
    line: {
      color: "#F7B394",
      backgroundColor: "rgba(247, 179, 148, 0.5)",
    },

    bar: {
      color: "#2172E5",
      backgroundColor: "#2172E5",
    },
  },
  number: {
    up: "#649200",
    down: "#FF2C53",
  },
};

export default function App() {
  const [theme, setTheme] = useState(Theme);
  const [currency, setCurrency] = useState("usd");
  const toggleTheme = () => {
    setTheme(theme === Theme ? InvertTheme : Theme);
  };

  const handleCurrency = (fiat) => {
    setCurrency(fiat);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/coins").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Navbar
            defaultCurrency={currency}
            handleCurrency={handleCurrency}
            toggleTheme={toggleTheme}
            fiat={currency}
          />
          <MiddleContainer>
            <Routes>
            <Route
                path="/"
                element={<CoinPage currency={currency} />}
              />
              <Route
                path="portfolio"
                element={<Portfolio currency={currency} />}
              />
              <Route path="coin/:id" element={<Coin fiat={currency} />} />
              <Route path="*" element={<Lost />} />
            </Routes>
          </MiddleContainer>

          <BottomBar />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
