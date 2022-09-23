import { useTheme } from "styled-components";
import {
  Container,
  Number,
  IconContainer,
  AbbreviatedNumber,
} from "./coinnumber.styles";
import { SVG } from "components";

const CoinNumber = (props) => {
  const theme = useTheme();
  function isPositive(number) {
    return number > (props.baseNumber || 0) ? "up-arrow" : "down-arrow";
  }
  return (
    <Container>
      <IconContainer>
        <SVG
          name={isPositive(props.number)}
          overrideFill={
            props.number > (props.baseNumber || 0)
              ? theme.number.up
              : theme.number.down
          }
        />
      </IconContainer>
      {props.abbr ? (
        <AbbreviatedNumber title={props.number + "%"} fiat={props.fiat}>
          <Number number={props.number} baseNumber={props.baseNumber || 0}>
            {props.number && props.number.toFixed(2)}%
          </Number>
        </AbbreviatedNumber>
      ) : (
        <Number number={props.number} baseNumber={props.baseNumber || 0}>
          {props.number}
          {props.children}
        </Number>
      )}
    </Container>
  );
};

export default CoinNumber;
