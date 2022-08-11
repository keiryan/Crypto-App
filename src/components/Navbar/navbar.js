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
                <AbbreviatedNumber number={data.data.total_market_cap[props.fiat]} fiat={props.fiat}/>
              </NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                <AbbreviatedNumber number={data.data.total_volume[props.fiat]} fiat={props.fiat}/>
              </NavBarNotchText>
              <ProgressBar value={20} max={100} />
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                {((data.data.total_volume.btc / data.data.total_market_cap.btc) * 100) |
                  0}
                %
              </NavBarNotchText>
              <IconContainer>
                <Icon src="https://bitcoin.org/img/icons/opengraph.png?1657703267" alt={coinOne.id} />
              </IconContainer>
              <ProgressBar
                value={data.data.total_volume.btc}
                max={data.data.total_market_cap.btc}
              />
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                {((data.data.total_volume.eth / data.data.total_market_cap.eth) * 100) |
                  0}
                %
              </NavBarNotchText>
              <IconContainer>
                <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png" alt={coinTwo.id} />
              </IconContainer>
              <ProgressBar
                value={data.data.total_volume.eth}
                max={data.data.total_market_cap.eth}
              />
            </NavBarNotchItem>
          </>
        )}
      </NotchContainer>
    </Container>
  );
}
