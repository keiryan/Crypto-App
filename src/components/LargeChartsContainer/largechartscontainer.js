import React from "react";
import axios from "axios";
import { useTheme } from "styled-components";
import { ChartContainer } from "components";
import { Container, Spacer } from "./largechartscontainer.styles";

function ChartsWithTheme(props) {
  const theme = useTheme();
  return (
    <>
      <ChartContainer
        coin={props.coin}
        chartType={"Line"}
        label={"Price"}
        data={props.coin.prices}
        headerNumber={props.coin.prices.at(-1)[1]}
      />
      <Spacer />
      <ChartContainer
        coin={props.coin}
        chartType={"Bar"}
        label={"Volume 24h"}
        data={props.coin.total_volumes}
        headerNumber={props.coin.prices.at(-1)[1]}
        color={theme.chart.bars}
      />
    </>
  );
}

export default class LargeChartsContainer extends React.Component {
  state = {
    loading: true,
    coin: {},
  };

  getData = async () => {
    const data = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
    );
    this.setState({ loading: false, coin: data.data });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        {!this.state.loading && <ChartsWithTheme coin={this.state.coin} />}
      </Container>
    );
  }
}
