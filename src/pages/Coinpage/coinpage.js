import React from "react";
import CoinContainer from '../../components/CoinContainer/coincontainer'
import { MiddleContainer } from './coinpage.styles'
export default class Coinpage extends React.Component {
  render() {
    return (
      <MiddleContainer>
         <CoinContainer />
      </MiddleContainer>
    );
  }
}