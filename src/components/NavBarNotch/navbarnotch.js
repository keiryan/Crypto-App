import React from 'react';
import axios from 'axios';
import {
  Container,
  IconContainer,
  NavBarNotchItem,
  NavBarNotchText,
  Icon,
} from "./navbarnotch.styles";
import ProgressBar from "../ProgressBar/progressbar";
import abbreviateNumber from "utils/NumberAbbreviator";

export default class NavBarNotch extends React.Component {
  state = {
    totalCoins: [],
    exchange: [],
    coinOne: {},
    coinTwo: {}, 
  }

  componentDidMount = async () => {
    const totalCoins = await axios(`https://api.coingecko.com/api/v3/coins/list`);
    const topCoins = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false`);
    const exchange = await axios(`https://api.coingecko.com/api/v3/exchanges/list`);

    this.setState({ totalCoins: totalCoins.data, exchange: exchange.data, coinOne: topCoins.data[0], coinTwo: topCoins.data[1]});
  }

  render(){
    return (
      <Container>
        <NavBarNotchItem>
          <NavBarNotchText>Coins {this.state.totalCoins.length}</NavBarNotchText>
        </NavBarNotchItem>
        <NavBarNotchItem>
          <NavBarNotchText>Exchange {this.state.exchange.length}</NavBarNotchText>
        </NavBarNotchItem>
        <NavBarNotchItem>
          <NavBarNotchText>{abbreviateNumber(this.props.marketCap)}</NavBarNotchText>
        </NavBarNotchItem>
        <NavBarNotchItem>
          <NavBarNotchText>{abbreviateNumber(this.props.coinValue)}</NavBarNotchText>
          <ProgressBar value={20} max={100} />
        </NavBarNotchItem>
        <NavBarNotchItem>
        <NavBarNotchText>{this.state.coinOne.circulating_supply / this.state.coinOne.total_supply * 100 | 0}%</NavBarNotchText>
         <IconContainer>
         <Icon src={this.state.coinOne.image} alt={this.state.coinOne.id}/>
         </IconContainer>
          <ProgressBar value={this.state.coinOne.circulating_supply} max={this.state.coinOne.total_supply} />
        </NavBarNotchItem>
        <NavBarNotchItem>
        <NavBarNotchText>{this.state.coinTwo.circulating_supply / this.state.coinTwo.total_supply * 100 | 0}%</NavBarNotchText>
         <IconContainer>
         <Icon src={this.state.coinTwo.image} alt={this.state.coinTwo.id}/>
         </IconContainer>
          <ProgressBar value={this.state.coinTwo.circulating_supply} max={this.state.coinTwo.total_supply} />
        </NavBarNotchItem>
      </Container>
    );
  }
};
