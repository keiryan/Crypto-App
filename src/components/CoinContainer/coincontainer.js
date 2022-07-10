import React from "react";

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
} from "./coincontainer.styles";

import ProgressBar from "components/ProgressBar/progressbar";
import abbreviateNumber from "utils/NumberAbbreviator"
import CoinChart from "components/CoinChart/coinchart";
import chartReducer from "../../utils/ChartReducer";

const DynamicRow = (props) => (
  <>
    {props.list.map((element, index) => {
      return (
        <TableRow key={Math.random() * 100000000}>
          <TableItem>{index + 1}</TableItem>
          <TableItem>
            <CoinNameContainer>
              <CoinIcon src={element.image} alt={element.coinName} />
              <CoinName>{element.name}</CoinName> <div style={{color: '#6188FF'}}>({element.symbol.toUpperCase()})</div>
            </CoinNameContainer>
          </TableItem>
          <TableItem>${element.current_price}</TableItem>
          <TableNumber><abbr title={element?.price_change_percentage_1h_in_currency + '%'}>{element?.price_change_percentage_1h_in_currency?.toFixed(2)}%</abbr></TableNumber>
          <TableNumber><abbr title={element.market_cap_change_percentage_24h + '%'}>{element.market_cap_change_percentage_24h.toFixed(2)}%</abbr></TableNumber>
          <TableNumber><abbr title={element.price_change_percentage_7d_in_currency + '%'}>{element.price_change_percentage_7d_in_currency.toFixed(2)}%</abbr></TableNumber>
          <TableItem >
            <ProgressContainer>
              <abbr title={element.total_volume}>{abbreviateNumber(element.total_volume)}</abbr>
              <abbr title={element.market_cap}>{abbreviateNumber(element.market_cap)}</abbr>
            </ProgressContainer>
            <ProgressBar
              value={element.total_volume}
              max={element.market_cap}
              overrideWidth="100%"
            />
          </TableItem>
          <TableItem>
          <ProgressContainer>
              <abbr title={element.circulating_supply}>{abbreviateNumber(element.circulating_supply)}</abbr>
              <abbr title={element.total_supply}>{abbreviateNumber(element.total_supply)}</abbr>
            </ProgressContainer>
            <ProgressBar
              value={element.circulating_supply}
              max={element.total_supply}
              overrideWidth="100%"
            />
          </TableItem>
          <TableItem>
          <CoinChart name={element.symbol} data={chartReducer(element.sparkline_in_7d.price)}/>
          </TableItem>
        </TableRow>
      );
    })}
  </>
);

export default class CoinContainer extends React.Component {
  render() {
    return (
      <TableContainer>
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
            <DynamicRow list={this.props.list} />
          </tbody>
        </Table>
      </TableContainer>
    );
  }
}
