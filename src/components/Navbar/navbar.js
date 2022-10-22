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
  MobileHeader,
  SearchBarContainer,
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
    console.log(data.data.data);
    console.log(
      data.data.data.total_market_cap.btc,
      data.data.data.total_market_cap.eth,
      data.data.data.total_volume.btc / data.data.data.total_market_cap.btc * 100
      
    );
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <Container>
      <NavContainer>
        <SideContainer>
          <MobileHeader>Overview:</MobileHeader>
          <LinkContainer>
            <PageLink to="/">Coinpage</PageLink>
            <PageLink to="portfolio">Portfolio</PageLink>
          </LinkContainer>
        </SideContainer>
        <SideContainer>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>

          <Dropdown
            handleCurrency={props.handleCurrency}
            defaultCurrency={props.defaultCurrency}
          />
          <ThemeContainer toggleTheme={props.toggleTheme} />
        </SideContainer>
      </NavContainer>
      {!loading && (
        <NotchContainer>
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
              <AbbreviatedNumber
                number={data.data.total_market_cap[props.fiat]}
                fiat={props.fiat}
              />
            </NavBarNotchText>
          </NavBarNotchItem>
          <NavBarNotchItem mobile>
            <NavBarNotchText margin>
              <AbbreviatedNumber
                number={data.data.total_volume[props.fiat]}
                fiat={props.fiat}
              />
            </NavBarNotchText>
            <ProgressBar value={20} max={100} />
          </NavBarNotchItem>
          <NavBarNotchItem mobile>
            <NavBarNotchText>
              {((data.data.total_volume.btc / data.data.total_market_cap.btc) *
                100) |
                0}
              %
            </NavBarNotchText>
            <IconContainer>
              <Icon
                src="https://bitcoin.org/img/icons/opengraph.png?1657703267"
                alt={coinOne.id}
              />
            </IconContainer>
            <ProgressBar
              value={data.data.total_volume.btc}
              max={data.data.total_market_cap.btc}
            />
          </NavBarNotchItem>
          <NavBarNotchItem mobile>
            <NavBarNotchText>
              {((data.data.total_volume.eth / data.data.total_market_cap.eth) *
                100) |
                0}
              %
            </NavBarNotchText>
            <IconContainer>
              <Icon
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
                alt={coinTwo.id}
              />
            </IconContainer>
            <ProgressBar
              value={data.data.total_volume.eth}
              max={data.data.total_market_cap.eth}
            />
          </NavBarNotchItem>
        </NotchContainer>
      )}
    </Container>
  );
}
