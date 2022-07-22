import React from "react";
import { LargeChartsContainer, MiddleContainer, Spacer } from "./coinpage.styles";
import { CoinContainer } from "components";
import { ChartContainer } from "components/Chart Container";

export default class CoinPage extends React.Component {

  render() {
    return (
      <MiddleContainer>
        <LargeChartsContainer>
        <ChartContainer chartType={'Line'} label={'Price'}/>
        <Spacer/>
        <ChartContainer chartType={'Bar'} label={'Volume 24h'}/>
        </LargeChartsContainer>
        <CoinContainer />
      </MiddleContainer>
    );
  } 
}
