import {
  Container,
  IconContainer,
  NavBarNotchItem,
  NavBarNotchText,
} from "./navbarnotch.styles";
import ProgressBar from "../ProgressBar/progressbar";
import { getMarketCap } from "utils/MarketCap";
import FastAverageColor from 'fast-average-color';
export const NavBarNotch = (props) => {
  return (
    <Container>
      <NavBarNotchItem>
        <NavBarNotchText>Coins {props.totalAmountOfCoins}</NavBarNotchText>
      </NavBarNotchItem>
      <NavBarNotchItem>
        <NavBarNotchText>Exchange {props.exchange}</NavBarNotchText>
      </NavBarNotchItem>
      <NavBarNotchItem>
        <NavBarNotchText>${getMarketCap(props.marketCap)}</NavBarNotchText>
      </NavBarNotchItem>
      <NavBarNotchItem>
        <NavBarNotchText>${getMarketCap(props.coinValue)}</NavBarNotchText>
        <ProgressBar value={20} max={100} />
      </NavBarNotchItem>
      <NavBarNotchItem>
      
      <NavBarNotchText>{props.firstCoin.percentage}%</NavBarNotchText>
        <IconContainer>{props.firstCoin.icon}</IconContainer>
        <ProgressBar value={props.firstCoin.percentage} max={100} />
      </NavBarNotchItem>
      <NavBarNotchItem>
      <NavBarNotchText>{props.secondCoin.percentage}%</NavBarNotchText>
        <IconContainer>{props.secondCoin.icon}</IconContainer>
        <ProgressBar value={props.secondCoin.percentage} max={100} />
      </NavBarNotchItem>
    </Container>
  );
};
