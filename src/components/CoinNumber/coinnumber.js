import { Container, Number, IconContainer } from "./coinnumber.styles";
import iconFinder from "icons";
import { SVGIcon } from "components";

const CoinNumber = (props) => {
  function isPositive(number) {
    return number > 0 ? "up-arrow" : "down-arrow";
  }
  return (
    <Container>
      <IconContainer>
        <SVGIcon icon={iconFinder(isPositive(props.number))} />
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
