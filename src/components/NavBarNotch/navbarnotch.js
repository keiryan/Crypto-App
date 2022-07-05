import {
  Container,
  IconContainer,
  NavBarNotchItem,
  NavBarNotchText,
} from "./navbarnotch.styles";
import ProgressBar from "../ProgressBar/progressbar";
import abbreviateNumber from "utils/NumberAbbreviator";
import FastAverageColor from 'fast-average-color';

const NavBarNotch = (props) => {
  return (
    <Container>
      <NavBarNotchItem>
        <NavBarNotchText>Coins {props.totalAmountOfCoins}</NavBarNotchText>
      </NavBarNotchItem>
      <NavBarNotchItem>
        <NavBarNotchText>Exchange {props.exchange}</NavBarNotchText>
      </NavBarNotchItem>
      <NavBarNotchItem>
        <NavBarNotchText>{abbreviateNumber(props.marketCap)}</NavBarNotchText>
      </NavBarNotchItem>
      <NavBarNotchItem>
        <NavBarNotchText>{abbreviateNumber(props.coinValue)}</NavBarNotchText>
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

export default NavBarNotch;
