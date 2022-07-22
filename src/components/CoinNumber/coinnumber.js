import { Container, Number, IconContainer } from "./coinnumber.styles";
import { SVG } from "components";

const CoinNumber = (props) => {
  function isPositive(number) {
    return number > 0 ? "up-arrow" : "down-arrow";
  }
  return (
    <Container>
      <IconContainer>
        <SVG name={isPositive(props.number)} />
      </IconContainer>
      {props.abbr ? (
        <abbr title={props.number + "%"}>
          <Number number={props.number}>{props.number && props.number.toFixed(2)}%</Number>
        </abbr>
      ) : (
        <Number number={props.number}>{props.number}</Number>
      )}
    </Container>
  );
};

export default CoinNumber;
