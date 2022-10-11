import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  LoadingContainer,
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
  RangeSelector,
  Chart,
  LoadingWave,
} from "components";

export default function Coin(props) {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [chart, setChart] = useState({
    timeFrame: 7,
    data: {},
  });

  const getData = async () => {
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );
    const chartData = await axios(
      `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${props.fiat}&days=${chart.timeFrame}&interval=daily`
    );

    setCoin(data.data);
    setChart({ ...chart, data: chartData.data });
    setLoading(false);
  };

  const getChartData = async () => {
    const chartData = await axios(
      `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${props.fiat}&days=${chart.timeFrame}&interval=daily`
    );
    setChart({ ...chart, data: chartData.data });
  };

  const handleTimeFrame = (timeFrame) => {
    setChart({ ...chart, timeFrame });
  };

  useEffect(() => {
    getData();
  }, [params.id, props.fiat]);

  useEffect(() => {
    getChartData();
  }, [chart.timeFrame, props.fiat]);

  return (
    <LoadingContainer isLoading={loading}>
      {loading && <LoadingWave number={9} />}
      {!loading && (
        <>
          <Container>
            <h1 style={{ color: "white", textDecoration: "underline" }}>
              Summary
            </h1>
            <TopContainers>
              <SmallDataContainer>
                <CoinProfile src={coin?.image?.large} />
                <CoinNameContainer>
                  <CoinName>{coin?.name}</CoinName>
                  <CoinSymbol>({coin?.symbol})</CoinSymbol>
                </CoinNameContainer>
                <StyledAnchor link={coin?.links?.homepage?.[0]} />
              </SmallDataContainer>
              <DataContainer>
                <CoinPrice>
                  <AbbreviatedNumber
                    number={coin?.market_data?.current_price?.[props.fiat]}
                    fiat={props.fiat}
                    noAbbreviation={true}
                  />
                </CoinPrice>
                <CoinNumber
                  number={
                    coin?.market_data
                      ?.price_change_percentage_24h_in_currency?.[props.fiat]
                  }
                />
                <LargeIconContainer>
                  <SVG name="stack" />
                </LargeIconContainer>
                <AllTimeContainer>
                  <Section>
                    <ListHeader>ATH:</ListHeader>
                    <List>
                      <ListItem>
                        <AbbreviatedNumber
                          number={coin?.market_data?.ath?.[props.fiat]}
                          fiat={props.fiat}
                          noAbbreviation={true}
                        />
                      </ListItem>
                      <ListItem>
                        <AbbreviatedNumber
                          number={
                            coin?.market_data?.ath_change_percentage?.[
                              props.fiat
                            ]
                          }
                          fiat={props.fiat}
                          noAbbreviation={true}
                        />
                      </ListItem>
                      <ListItem>
                        {simpleDateParser(
                          coin?.market_data?.ath_date?.[props.fiat]
                        )}
                      </ListItem>
                    </List>
                  </Section>
                  <Section>
                    <ListHeader>ATL:</ListHeader>
                    <List>
                      <ListItem>
                        <AbbreviatedNumber
                          number={coin?.market_data?.atl?.[props.fiat]}
                          fiat={props.fiat}
                          noAbbreviation={true}
                        />
                      </ListItem>
                      <ListItem>
                        <AbbreviatedNumber
                          number={
                            coin?.market_data?.atl_change_percentage?.[
                              props.fiat
                            ]
                          }
                          fiat={props.fiat}
                          noAbbreviation={true}
                        />
                      </ListItem>
                      <ListItem>
                        {simpleDateParser(
                          coin?.market_data?.atl_date?.[props.fiat]
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
                        {coin?.market_data?.market_cap?.[props.fiat]}
                        <CoinNumber
                          number={
                            coin?.market_data
                              ?.market_cap_change_percentage_24h_in_currency?.[
                              props.fiat
                            ]
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
                            coin?.market_data?.fully_diluted_valuation?.[
                              props.fiat
                            ]
                          }
                          fiat={props.fiat}
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
                          number={coin?.market_data?.total_volume?.[props.fiat]}
                          fiat={props.fiat}
                        />
                      </NumberContainer>
                    </ListItem>

                    <ListItem>
                      <NumberContainer>
                        <DataType>Circulating Supply:</DataType>
                        <AbbreviatedNumber
                          fiat={false}
                          number={coin?.market_data?.circulating_supply}
                          crypto={coin?.symbol}
                        />
                      </NumberContainer>
                    </ListItem>

                    <ListItem>
                      <NumberContainer>
                        <DataType color="#2172E5">Max Supply:</DataType>
                        <AbbreviatedNumber
                          fiat={props.fiat}
                          number={coin?.market_data?.max_supply}
                          crypto={coin?.symbol}
                        />
                      </NumberContainer>
                    </ListItem>
                  </List>
                </ListContainer>
              </DataContainer>
            </TopContainers>
            <Description
              dangerouslySetInnerHTML={{
                __html: coin?.description?.en,
              }}
            />
            <RangeSelector handleTimeFrame={handleTimeFrame} />
            <CoinConversionContainer>
              {!loading && (
                <ConversionBar
                  fiat={{
                    name: "USD",
                    value: coin?.market_data?.current_price?.[props.fiat],
                    currentPrice:
                      coin?.market_data?.current_price?.[props.fiat],
                  }}
                  crypto={coin?.symbol}
                />
              )}
            </CoinConversionContainer>
          </Container>
          <CoinChartContainer>
            {!loading && (
              <Chart chartType="BottomLine" data={chart.data.prices} />
            )}
          </CoinChartContainer>
        </>
      )}
    </LoadingContainer>
  );
}
