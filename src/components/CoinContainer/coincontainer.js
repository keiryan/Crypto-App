import React from "react";
import {
  TableContainer,
  CoinHeader,
  HeaderItem,
  Table,
  TableHeaderItem,
  TableItem,
  TableNumber,
  CoinIcon,
  CoinNameContainer,
} from "./coincontainer.styles";

import ProgressBar from "components/ProgressBar/progressbar";

const Mock = [
  {
    coinName: "Bitcoin",
    icon: "https://cdn-icons-png.flaticon.com/512/825/825540.png",
    price: 40000,
    change: "0.53",
    volume: "12.34",
    supply: "10.24",
    currentMarketCap: 150_000,
    totalMarketCap: 300_000,
    circulatingSupply: 10_000,
    totalSupply: 100_000,
  },
  {
    coinName: "Ethereum",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg",
    price: 3000,
    change: 0.53,
    volume: 12.34,
    supply: 10.24,
    currentMarketCap: 150_000,
    totalMarketCap: 300_000,
    circulatingSupply: 10000,
    totalSupply: 100_000,
  },
];

const DynamicRow = (props) => (
  <>
    {props.list.map((element, index) => {
      return (
        <tr key={Math.random() * 10000000}>
          <TableItem>{index + 1}</TableItem>
          <TableItem>
            <CoinNameContainer>
              <CoinIcon src={element.icon} alt={element.coinName} />
              {element.coinName}
            </CoinNameContainer>
          </TableItem>
          <TableItem>${element.price}</TableItem>
          <TableNumber>{element.change}</TableNumber>
          <TableNumber>{element.volume}</TableNumber>
          <TableNumber>{element.supply}</TableNumber>
          <TableItem>
            <ProgressBar
              value={element.currentMarketCap}
              max={element.totalMarketCap}
            />
          </TableItem>
          <TableItem>
            <ProgressBar
              value={element.circulatingSupply}
              max={element.totalSupply}
            />
          </TableItem>
        </tr>
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
            <TableHeaderItem>24h Volume/Market Cap</TableHeaderItem>
            <TableHeaderItem>Circulating/Total Supply</TableHeaderItem>
            <TableHeaderItem>Last 7d</TableHeaderItem>
          </tr>
          </thead>
          <tbody>
          <DynamicRow list={Mock} />
          </tbody>
        </Table>
      </TableContainer>
    );
  }
}
