import React from "react";
import CoinContainer from '../../components/CoinContainer/coincontainer'
import { MiddleContainer } from './coinpage.styles'
import axios from 'axios';

export default class CoinPage extends React.Component {
  state = {
    coinBank: []
  }

  async componentDidMount() {
      const data = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
      this.setState({coinBank: data.data})
    }

  render() {
    console.log(this.state.coinBank)
    return (
      <MiddleContainer>
         <CoinContainer list={this.state.coinBank}/>
      </MiddleContainer>
    );
  }
}