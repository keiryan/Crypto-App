import React from "react";
import axios from "axios";
import {
  Container,
  IconContainer,
  NavBarNotchItem,
  NavBarNotchText,
  Icon,
} from "./navbarnotch.styles";
import { ProgressBar, AbbreviatedNumber } from "components";

export default class NavBarNotch extends React.Component {
  state = {
    data: {},
    loading: true,
    coinOne: {},
    coinTwo: {},
  };

  componentDidMount = async () => {
    const data = await axios("https://api.coingecko.com/api/v3/global");
    this.setState({ data: data.data, loading: false });
  };

  render() {
    return (
      <Container>
        {!this.state.loading && (
          <>
            <NavBarNotchItem>
              <NavBarNotchText>
                Coins {this.state.data.data.active_cryptocurrencies}
              </NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                Exchange {this.state.data.data.markets}
              </NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                <AbbreviatedNumber number={this.props.marketCap}/>
              </NavBarNotchText>
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
              <AbbreviatedNumber number={this.props.coinValue}/>
              </NavBarNotchText>
              <ProgressBar value={20} max={100} />
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                {((this.state.coinOne.circulating_supply /
                  this.state.coinOne.total_supply) *
                  100) |
                  0}
                %
              </NavBarNotchText>
              <IconContainer>
                <Icon
                  src={this.state.coinOne.image}
                  alt={this.state.coinOne.id}
                />
              </IconContainer>
              <ProgressBar
                value={this.state.coinOne.circulating_supply}
                max={this.state.coinOne.total_supply}
              />
            </NavBarNotchItem>
            <NavBarNotchItem>
              <NavBarNotchText>
                {((this.state.coinTwo.circulating_supply /
                  this.state.coinTwo.total_supply) *
                  100) |
                  0}
                %
              </NavBarNotchText>
              <IconContainer>
                <Icon
                  src={this.state.coinTwo.image}
                  alt={this.state.coinTwo.id}
                />
              </IconContainer>
              <ProgressBar
                value={this.state.coinTwo.circulating_supply}
                max={this.state.coinTwo.total_supply}
              />
            </NavBarNotchItem>
          </>
        )}
      </Container>
    );
  }
}
