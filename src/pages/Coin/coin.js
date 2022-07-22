import React from "react";
import axios from "axios";
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
  LinkContainer,
  IconContainer,
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
} from "./coin.styles";
import simpleDateParser from "utils/DateParser/dateparser";
import iconFinder from "icons";
import {
  CoinNumber,
  SVGIcon,
  AbbreviatedNumber,
  StyledAnchor,
} from "components";

function WithRouter(props) {
  const params = useParams();
  const Component = props.component;

  return <Component param={params} />;
}

class Coin extends React.Component {
  state = {
    coin: {},
  };

  getData = async () => {
    const data = await axios(
      `https://api.coingecko.com/api/v3/coins/${this.props.param.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );
    this.setState({ coin: data.data });
  };

  async componentDidMount() {
    this.getData();
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.match.params);
    // if (this.props.match.params.id !== prevProps.match.params.id) {
    //     console.log('IF FIRED');
    //   this.getCity();
    // }
  }

  // <Link href={this.state.coin?.links?.homepage?.[0]} target={"_blank"}>
  //       {this.state.coin?.links?.homepage?.[0] &&
  //         this.linkSplitter(this.state.coin?.links?.homepage?.[0])}
  //     </Link>

  render() {
    console.log(this.state.coin);
    return (
      <Container>
        <h1 style={{ color: "white", "text-decoration": "underline" }}>
          Summary
        </h1>
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
              <SVGIcon icon={iconFinder("stack")} />
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
        ></Description>
      </Container>
    );
  }
}

const Component = () => <WithRouter component={Coin} />;

export default Component;
