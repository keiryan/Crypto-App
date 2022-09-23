import {
  Container,
  StandardContainer,
  Currency,
} from "./numberabbreviator.styles";

const fiatBank = {
  usd: "$",
  eur: "€",
  gbp: "£",
  aud: "$",
};

export default function AbbreviatedNumber(props) {
  let symbol;
  let fiatSymbol = "";
  if (props.fiat) {
    if (props.fiat in fiatBank) {
      fiatSymbol = fiatBank[props.fiat];
    } else {
      fiatSymbol = `${props.fiat}`.toUpperCase();
    }
  } else {
    fiatSymbol = "";
  }

  if (props.noAbbreviation) {
    return (
      <StandardContainer flex={props.flex}>
        {fiatSymbol.length === 1 && fiatSymbol}
        {props.number}{" "}
        <Currency>{fiatSymbol.length > 1 && fiatSymbol.toUpperCase()}</Currency>
      </StandardContainer>
    );
  }
  let finalNumber;
  if (props.number === null) {
    props.abbr ? (finalNumber = "Inf") : (finalNumber = "Infinity");
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
        finalNumber =
          fiatSymbol.length === 1
            ? `${
                fiatSymbol + spreadNum.slice(0, spreadNum.length - 1)
              }.${spreadNum.at(-1)}`.concat(symbol)
            : `${spreadNum.slice(0, spreadNum.length - 1)}.${spreadNum.at(
                -1
              )}`.concat(symbol) + ` ${fiatSymbol}`;
      } else {
        finalNumber =
          fiatSymbol.length === 1
            ? `${fiatSymbol + spreadNum.slice(0, spreadNum.length - 1)}`.concat(
                symbol
              )
            : `${spreadNum.slice(0, spreadNum.length - 1)}`.concat(symbol) +
              ` ${fiatSymbol}`;
      }
    } else {
      fiatSymbol.length === 1
        ? (finalNumber = `${fiatSymbol + parsedNum.slice(0, 3)}${symbol}`)
        : (finalNumber = `${parsedNum.slice(0, 3)} ${fiatSymbol}`);
    }
  }

  return (
    <Container title={fiatSymbol.length === 1 ? `${fiatSymbol}${props.number}` : `${props.number} ${fiatSymbol}`}>
      {finalNumber} {props.crypto && props.crypto.toUpperCase()}
    </Container>
  );
}
