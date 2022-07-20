import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  TableContainer,
  HeaderItem,
  Table,
  TableHeaderItem,
  TableItem,
  TableNumber,
  CoinIcon,
  CoinNameContainer,
  TableRow,
  ProgressContainer,
  CoinName,
  Loading,
  LoadMoreButton,
  TableNumberContainer,
  StyledLink,
} from "./coincontainer.styles";
import {
  ProgressBar,
  CoinChart,
  CoinNumber,
  AbbreviatedNumber,
} from "components";
import chartReducer from "../../utils/ChartReducer";

const DynamicRow = (props) => (
  <>
    {props.list.map((element, index) => {
      return (
        <TableRow key={Math.random() * 100000000}>
          <TableItem>{index + 1}</TableItem>
          <TableItem>
            <StyledLink to={`/coin/${element.id}`}>
              <CoinNameContainer>
                <CoinIcon src={element.image} alt={element.coinName} />
                <CoinName>{element.name}</CoinName>{" "}
                <div style={{ color: "#6188FF" }}>
                  ({element.symbol.toUpperCase()})
                </div>
              </CoinNameContainer>
            </StyledLink>
          </TableItem>
          <TableItem>${element.current_price}</TableItem>

          <TableNumber number={element?.price_change_percentage_1h_in_currency}>
            <TableNumberContainer>
              <CoinNumber
                number={element?.price_change_percentage_1h_in_currency}
                abbr={true}
              />
            </TableNumberContainer>
          </TableNumber>

          <TableNumber number={element.market_cap_change_percentage_24h}>
            <TableNumberContainer>
              <CoinNumber
                number={element.market_cap_change_percentage_24h}
                abbr={true}
              />
            </TableNumberContainer>
          </TableNumber>

          <TableNumber number={element.price_change_percentage_7d_in_currency}>
            <TableNumberContainer>
              <CoinNumber
                number={element.price_change_percentage_7d_in_currency}
                abbr={true}
              />
            </TableNumberContainer>
          </TableNumber>
          <TableItem>
            <ProgressContainer>
              <AbbreviatedNumber number={element.total_volume} />
              <AbbreviatedNumber number={element.market_cap} />
            </ProgressContainer>
            <ProgressBar
              value={element.total_volume}
              max={element.market_cap}
              overrideWidth="100%"
            />
          </TableItem>
          <TableItem>
            <ProgressContainer>
              <AbbreviatedNumber number={element.circulating_supply} />
              <AbbreviatedNumber number={element.total_supply} />
            </ProgressContainer>
            <ProgressBar
              value={element.circulating_supply}
              max={element.total_supply}
              overrideWidth="100%"
            />
          </TableItem>
          <TableItem>
            <CoinChart
              name={element.symbol}
              data={chartReducer(element.sparkline_in_7d.price)}
            />
          </TableItem>
        </TableRow>
      );
    })}
  </>
);

export default class CoinContainer extends React.Component {
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
    const newValue = this.state.page + 1;
    this.setState({ page: newValue, isLoading: true });
    this.getData();
  };

  render() {
    console.log(this.state.coinBank);
    return (
      <TableContainer>
        <Loading loading={this.state.isLoading}>Loading...</Loading>
        <Table>
          <thead>
            <tr>
              <TableHeaderItem>#</TableHeaderItem>
              <TableHeaderItem>Name</TableHeaderItem>
              <TableHeaderItem>Price</TableHeaderItem>
              <TableHeaderItem>1h%</TableHeaderItem>
              <TableHeaderItem>24h%</TableHeaderItem>
              <TableHeaderItem>7d%</TableHeaderItem>
              <TableHeaderItem>24h Volume / Market Cap</TableHeaderItem>
              <TableHeaderItem>Circulating / Total Supply</TableHeaderItem>
              <TableHeaderItem>Last 7d</TableHeaderItem>
            </tr>
          </thead>
          <tbody>
            <DynamicRow list={this.state.coinBank} />
          </tbody>
        </Table>
        <LoadMoreButton
          onClick={this.nextPage}
          length={this.state.coinBank.length}
        >
          Load More
        </LoadMoreButton>
      </TableContainer>
    );
  }
}
