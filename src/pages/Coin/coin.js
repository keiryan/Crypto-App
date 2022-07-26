import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useParams } from "react-router-dom";
import {
  CoinName,
  CoinProfile,
  Container,
  DataContainer,
  TopContainers,
  CoinNameContainer,
  CoinSymbol,
  Description,
  CoinPrice,
  SmallDataContainer,
  List,
  ListItem,
  Section,
  ListHeader,
  AllTimeContainer,
  DataType,
  NumberContainer,
  ListContainer,
  LargeIconContainer,
  CoinConversionContainer,
  CoinChartContainer,
} from "./coin.styles";
import simpleDateParser from "utils/DateParser/dateparser";
import {
  CoinNumber,
  SVG,
  AbbreviatedNumber,
  StyledAnchor,
  ConversionBar,
} from "components";

import { chartLocator } from "../../utils/ChartLegend";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WithRouter(props) {
  const params = useParams();
  const Component = props.component;

  return <Component param={params} />;
}

class Coin extends React.Component {
  state = {
    coin: {},
    loading: true,
    config: {
      data: {},
      options: {},
    },
  };

  getData = async () => {
    const chartType = chartLocator("BottomLine");
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/${this.props.param.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );

    this.setState({
      loading: false,
      coin: data.data,
      config: {
        data: {
          labels: data.data.market_data.sparkline_7d.price.map(
            (element, index) => index + 1
          ),
          datasets: [
            {
              ...chartType.config.data.datasets[0],
              label: "",
              data: data.data.market_data.sparkline_7d.price.map(
                (element, index) => element
              ),
            },
          ],
        },
        options: {
          ...chartType.config.options,
        },
      },
    });
  };

  async componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
      <Container>
        <h1 style={{ color: "white", textDecoration: "underline" }}>Summary</h1>
        <TopContainers>
          <SmallDataContainer>
            <CoinProfile src={this.state.coin?.image?.large} />
            <CoinNameContainer>
              <CoinName>{this.state.coin?.name}</CoinName>
              <CoinSymbol>({this.state.coin?.symbol})</CoinSymbol>
            </CoinNameContainer>
            <StyledAnchor link={this.state.coin?.links?.homepage?.[0]} />
          </SmallDataContainer>
          <DataContainer>
            <CoinPrice>
              ${this.state.coin?.market_data?.current_price?.usd}
            </CoinPrice>
            <CoinNumber
              number={
                this.state.coin?.market_data
                  ?.price_change_percentage_24h_in_currency.usd
              }
            />

            <LargeIconContainer>
              <SVG name="stack" />
            </LargeIconContainer>

            <AllTimeContainer>
              <Section>
                <ListHeader>ATH:</ListHeader>
                <List>
                  <ListItem>${this.state.coin?.market_data?.ath?.usd}</ListItem>
                  <ListItem>
                    ${this.state.coin?.market_data?.ath_change_percentage?.usd}
                  </ListItem>
                  <ListItem>
                    {simpleDateParser(
                      this.state.coin?.market_data?.ath_date?.usd
                    )}
                  </ListItem>
                </List>
              </Section>
              <Section>
                <ListHeader>ATL:</ListHeader>
                <List>
                  <ListItem>${this.state.coin?.market_data?.atl?.usd}</ListItem>
                  <ListItem>
                    ${this.state.coin?.market_data?.atl_change_percentage?.usd}
                  </ListItem>
                  <ListItem>
                    {simpleDateParser(
                      this.state.coin?.market_data?.atl_date?.usd
                    )}
                  </ListItem>
                </List>
              </Section>
            </AllTimeContainer>
          </DataContainer>
          <DataContainer>
            <ListContainer>
              <List>
                <ListItem>
                  <NumberContainer>
                    <DataType>Market Cap:</DataType>$
                    {this.state.coin?.market_data?.market_cap?.usd}
                    <CoinNumber
                      number={
                        this.state.coin?.market_data
                          ?.market_cap_change_percentage_24h_in_currency?.usd
                      }
                      abbr={true}
                    />
                  </NumberContainer>
                </ListItem>
                <ListItem>
                  <NumberContainer>
                    <DataType>Fully Diluted Valuation:</DataType>
                    <AbbreviatedNumber
                      number={
                        this.state.coin?.market_data?.fully_diluted_valuation
                          ?.usd
                      }
                    />
                  </NumberContainer>
                </ListItem>
                <ListItem>
                  <NumberContainer>
                    <DataType>Volume 24h: ???</DataType>
                  </NumberContainer>
                </ListItem>
                <ListItem>
                  <NumberContainer>
                    <DataType color="lime">Total Volume:</DataType>
                    <AbbreviatedNumber
                      number={this.state.coin?.market_data?.total_volume?.usd}
                    />
                  </NumberContainer>
                </ListItem>

                <ListItem>
                  <NumberContainer>
                    <DataType>Circulating Supply:</DataType>
                    <AbbreviatedNumber
                      fiat={false}
                      number={this.state.coin?.market_data?.circulating_supply}
                      crypto={this.state.coin?.symbol}
                    />
                  </NumberContainer>
                </ListItem>

                <ListItem>
                  <NumberContainer>
                    <DataType color="#2172E5">Max Supply:</DataType>
                    <AbbreviatedNumber
                      fiat={false}
                      number={this.state.coin?.market_data?.max_supply}
                      crypto={this.state.coin?.symbol}
                    />
                  </NumberContainer>
                </ListItem>
              </List>
            </ListContainer>
          </DataContainer>
        </TopContainers>
        <Description
          dangerouslySetInnerHTML={{ __html: this.state.coin?.description?.en }}
        />
        <CoinConversionContainer>
          <ConversionBar
            fiat={{
              name: "USD",
              value: this.state.coin?.market_data?.current_price?.usd,
              currentPrice: this.state.coin?.market_data?.current_price?.usd,
            }}
            crypto={this.state.coin?.symbol}
          />
        </CoinConversionContainer>
        
      </Container>
      <CoinChartContainer>
          {!this.state.loading && (
            <Line
              data={this.state.config.data}
              options={this.state.config.options}
            />
          )}
        </CoinChartContainer>
      </>
    );
  }
}

const Component = () => <WithRouter component={Coin} />;

export default Component;
