import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  NumberContainer,
  SymbolContainer,
  InputContainer,
  FiatContainer,
} from "./conversionbar.styles";
import { SVG } from "components";

export const NumberInput = (props) => {
  return (
    <NumberContainer>
      <SymbolContainer>{props.symbol?.toUpperCase()}</SymbolContainer>
      <FiatContainer>{props.fiat}</FiatContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter amount"
          onChange={props.handleChange}
          value={props.value}
        />
      </InputContainer>
    </NumberContainer>
  );
};

function ConversionBar(props) {
  const [fiat, setFiat] = useState({});
  const [crypto, setCrypto] = useState(1);

  const fiatChange = (e) => {
    const { value } = e.target;
    setFiat({
      ...fiat,
      value: value,
    });
    setCrypto(value / fiat.currentPrice);
  };

  const cryptoChange = (e) => {
    const { value } = e.target;
    setCrypto(value);
    setFiat({
      ...fiat,
      value: value * fiat.currentPrice,
    });
  };

  useEffect(() => {
    setFiat(props.fiat);
  }, [props.fiat]);

  return (
    <Container>
      <NumberInput
        symbol={fiat?.name}
        handleChange={fiatChange}
        value={fiat.value}
        fiat="$"
      />
      <SVG name="sync" />
      <NumberInput
        symbol={props.crypto}
        handleChange={cryptoChange}
        value={crypto}
      />
    </Container>
  );
}

export default ConversionBar;
