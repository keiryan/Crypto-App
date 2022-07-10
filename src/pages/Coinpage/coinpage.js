import React from "react";
import axios from "axios";
import { Loading, LoadMoreButton, MiddleContainer } from "./coinpage.styles";
import { CoinContainer } from "../../components/CoinContainer";

export default class CoinPage extends React.Component {
  state = {
    page: 1,
    isLoading: true,
    coinBank: [],
  };

  getData = async () => {
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    this.setState({
      coinBank: [...this.state.coinBank, ...data.data],
      isLoading: false,
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  nextPage = () => {
    this.setState({ page: (this.state.page += 1), isLoading: true });
    this.getData();
  };

  render() {
    console.log(this.state.coinBank);
    return (
      <MiddleContainer>
        <CoinContainer list={this.state.coinBank} />
        <Loading loading={this.state.isLoading}>Loading...</Loading>
        <LoadMoreButton onClick={this.nextPage} length={this.state.coinBank.length}>Load More</LoadMoreButton>
      </MiddleContainer>
    );
  } 
}
