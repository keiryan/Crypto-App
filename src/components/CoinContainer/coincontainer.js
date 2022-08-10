import axios from "axios";
import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import {
  TableContainer,
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
  SmallChartContainer,
} from "./coincontainer.styles";
import { ProgressBar, CoinNumber, AbbreviatedNumber, Chart } from "components";
import chartReducer from "../../utils/ChartReducer";

const DynamicRow = (props) => {
  const theme = useTheme();
  return (
    <>
      {props.list.map((element, index) => {
        return (
          <TableRow key={element.name}>
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
            <TableItem>
              <AbbreviatedNumber
                number={element.current_price}
                fiat={props.fiat}
                abbr={false}
                noAbbreviation={true}
                flex={'center'}
              />
            </TableItem>

            <TableNumber
              number={element?.price_change_percentage_1h_in_currency}
            >
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

            <TableNumber
              number={element.price_change_percentage_7d_in_currency}
            >
              <TableNumberContainer>
                <CoinNumber
                  number={element.price_change_percentage_7d_in_currency}
                  abbr={true}
                />
              </TableNumberContainer>
            </TableNumber>
            <TableItem>
              <ProgressContainer>
                <AbbreviatedNumber
                  number={element.total_volume}
                  fiat={props.fiat}
                />
                <AbbreviatedNumber
                  number={element.market_cap}
                  fiat={props.fiat}
                />
              </ProgressContainer>
              <ProgressBar
                value={element.total_volume}
                max={element.market_cap}
                overrideWidth="100%"
              />
            </TableItem>
            <TableItem>
              <ProgressContainer>
                <AbbreviatedNumber
                  number={element.circulating_supply}
                  fiat={props.fiat}
                />
                <AbbreviatedNumber
                  number={element.total_supply}
                  fiat={props.fiat}
                />
              </ProgressContainer>
              <ProgressBar
                value={element.circulating_supply}
                max={element.total_supply}
                overrideWidth="100%"
              />
            </TableItem>
            <TableItem>
              <SmallChartContainer>
                <Chart
                  chartType="SmallLine"
                  data={chartReducer(element.sparkline_in_7d.price)}
                  color={theme.chart.line.small}
                />
              </SmallChartContainer>
            </TableItem>
          </TableRow>
        );
      })}
    </>
  );
};

export default function CoinContainer(props) {
  const [coinBank, setCoinBank] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(100);

  const getData = async (replace) => {
    replace && setPage(1);
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=${resultsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    if (page === 1) {
      setCoinBank(data.data);
    } else {
      console.error("Added");
      setCoinBank([...coinBank, ...data.data]);
    }
    setIsLoading(false);
  };

  const nextPage = async () => {
    const newValue = page + 1;
    setPage(newValue);
  };

  useEffect(() => {
    getData(false);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [props.currency]);

  useEffect(() => {
    getData(false);
  }, [page]);

  return (
    <TableContainer>
      <Loading loading={isLoading ? 1 : 0}>Loading...</Loading>
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
          {!isLoading && <DynamicRow list={coinBank} fiat={props.currency} />}
        </tbody>
      </Table>
      <LoadMoreButton onClick={nextPage} length={coinBank.length}>
        Load More
      </LoadMoreButton>
    </TableContainer>
  );
}
