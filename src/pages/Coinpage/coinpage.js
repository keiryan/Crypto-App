import React from "react";
import { MiddleContainer } from "./coinpage.styles";
import { CoinContainer, LargeChartsContainer } from "components";

export default class CoinPage extends React.Component {
  render() {
    return (
      <MiddleContainer>
        <LargeChartsContainer />
        <CoinContainer />
      </MiddleContainer>
    );
  }
}
