import React from "react";
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

export default class ConversionBar extends React.Component {
  state = {
    fiat: {},
    crypto: 1,
  };

  fiatChange = (e) => {
    const { value } = e.target;
    this.setState({
      fiat: {
        ...this.state.fiat,
        value: value,
      },
      crypto: value / this.state.fiat.currentPrice,
    });
  };

  cryptoChange = (e) => {
    const { value } = e.target;
    this.setState({
      crypto: value,
      fiat: {
        ...this.state.fiat,
        value: value * this.state.fiat.currentPrice,
      },
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.fiat !== this.props.fiat) {
      this.setState({ fiat: { ...this.props.fiat } });
    }
  }

  render() {
    return (
      <Container>
        <NumberInput
          symbol={this.state?.fiat?.name}
          handleChange={this.fiatChange}
          value={this.state.fiat.value}
          fiat="$"
        />
        <SVG name="sync" />
        <NumberInput
          symbol={this.props.crypto}
          handleChange={this.cryptoChange}
          value={this.state.crypto}
        />
      </Container>
    );
  }
}
