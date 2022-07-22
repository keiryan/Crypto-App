import { Container } from "./numberabbreviator.styles";

export default function AbbreviatedNumber(props) {
  let symbol;
  const fiatSymbol = props.fiat === false ? '' : props.fiat || "$";
  let finalNumber;
  if (props.number === null) {
    props.abbr ? finalNumber = "Inf" : finalNumber = "Infinity"
  } else if (props.number === 0) {
    finalNumber = `${fiatSymbol}0`;
  } else {
    const parsedNum = `${props.number}`.includes(".")
      ? `${props.number}`.split(".")[0]
      : `${props.number}`;
    const formula = parsedNum.length % 3;

    if (parsedNum.length < 4) {
      finalNumber = `${fiatSymbol + parsedNum}`;
    }
    switch (parsedNum.length) {
      case 4:
      case 5:
      case 6:
        symbol = "K";
        break;
      case 7:
      case 8:
      case 9:
        symbol = "M";
        break;
      case 10:
      case 11:
      case 12:
        symbol = "B";
        break;
      case 13:
      case 14:
      case 15:
        symbol = "T";
        break;
      default:
        symbol = "";
    }
    if (formula > 0) {
      const spreadNum = parsedNum.slice(0, formula + 1);
      if (spreadNum.at(-1) > 0) {
        finalNumber = `${
          fiatSymbol + spreadNum.slice(0, spreadNum.length - 1)
        }.${spreadNum.at(-1)}`.concat(symbol);
      } else {
        finalNumber = `${
          fiatSymbol + spreadNum.slice(0, spreadNum.length - 1)
        }`.concat(symbol);
      }
    } else {
      finalNumber = `${fiatSymbol + parsedNum.slice(0, 3)}${symbol}`;
    }
  }
  return <Container title={`${fiatSymbol}${props.number}`}>{finalNumber} {props.crypto && props.crypto.toUpperCase()}</Container>;
}
