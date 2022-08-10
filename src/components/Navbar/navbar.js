import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  NavContainer,
  LinkContainer,
  PageLink,
  SideContainer,
  NotchContainer,
  IconContainer,
  NavBarNotchItem,
  NavBarNotchText,
  Icon,
} from "./navbar.styles";
import {
  Dropdown,
  SearchBar,
  ProgressBar,
  AbbreviatedNumber,
  ThemeContainer,
} from "components";

export default function Navbar(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [coinOne, setCoinOne] = useState({});
  const [coinTwo, setCoinTwo] = useState({});

  const getData = async () => {
    const data = await axios("https://api.coingecko.com/api/v3/global");
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <NavContainer>
        <SideContainer>
          <LinkContainer>
            <PageLink to="coinpage">Coinpage</PageLink>
            <PageLink to="portfolio">Portfolio</PageLink>
          </LinkContainer>
        </SideContainer>
        <SideContainer>
          <SearchBar />
          <Dropdown handleCurrency={props.handleCurrency} defaultCurrency={props.defaultCurrency}/>
          <ThemeContainer toggleTheme={props.toggleTheme} />
        </SideContainer>
      </NavContainer>
      <NotchContainer>
        {!loading && (
          <>
            <NavBarNotchItem>
              <NavBarNotchText>
                Coins {data.data.active_cryptocurrencies}
              </NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>Exchange {data.data.markets}</NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                <AbbreviatedNumber number={props.marketCap} fiat={props.fiat}/>
              </NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                <AbbreviatedNumber number={props.coinValue} fiat={props.fiat}/>
              </NavBarNotchText>
              <ProgressBar value={20} max={100} />
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                {((coinOne.circulating_supply / coinOne.total_supply) * 100) |
                  0}
                %
              </NavBarNotchText>
              <IconContainer>
                <Icon src={coinOne.image} alt={coinOne.id} />
              </IconContainer>
              <ProgressBar
                value={coinOne.circulating_supply}
                max={coinOne.total_supply}
              />
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                {((coinTwo.circulating_supply / coinTwo.total_supply) * 100) |
                  0}
                %
              </NavBarNotchText>
              <IconContainer>
                <Icon src={coinTwo.image} alt={coinTwo.id} />
              </IconContainer>
              <ProgressBar
                value={coinTwo.circulating_supply}
                max={coinTwo.total_supply}
              />
            </NavBarNotchItem>
          </>
        )}
      </NotchContainer>
    </Container>
  );
}
