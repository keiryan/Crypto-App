import React from "react";
import {
  Container,
  Input,
  NumberContainer,
  SymbolContainer,
  InputContainer,
} from "./conversionbar.styles";
import { SVG } from "components";

export const NumberInput = (props) => {
  return (
    <NumberContainer>
      <SymbolContainer>{props.symbol?.toUpperCase()}</SymbolContainer>
      <InputContainer>
        <Input type="text" value={props.value} />
      </InputContainer>
    </NumberContainer>
  );
};

export default class ConversionBar extends React.Component {
  state = {
    fiat: this.props?.fiat?.value,
    crypto: 1,
  };

  fiatChange = (e) => {
    this.setState({
      fiat: e.target.value,
      crypto: ~~e.target.value / this.props?.fiat?.value,
    });
  };

  cryptoChange = (e) => {
    this.setState({
      crypto: e.target.value,
      fiat: (this.props?.fiat?.value * e.target.value) >> 0,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
       this.setState({fiat: this.props?.fiat?.value})
    }
}

  render() {
    return (
      <Container>
        <NumberInput
          symbol={this.props?.fiat?.name}
          onChange={this.fiatChange}
          type="text"
          placeholder="Enter amount"
          value={this.state.fiat}
        />
        <SVG name='sync' />
        <NumberInput
          symbol={this.props?.crypto}
          onChange={this.cryptoChange}
          type="text"
          placeholder="Enter amount "
          value={this.state?.crypto}
        />
      </Container>
    );
  }
}
