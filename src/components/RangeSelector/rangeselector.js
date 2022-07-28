import React from "react";
import {
  Container,
  ButtonContainer,
  Button,
  Text,
} from "./rangeselector.styles";

const StyledButton = (props) => {
  return props.list.map((element) => {
    return (
      <ButtonContainer key={Math.random() * 10000000}>
        <Button
          selected={props.range === element.value}
          onClick={props.handleClick}
          id={element.id}
        />
        <Text>{element.value}</Text>
      </ButtonContainer>
    );
  });
};

export default class RangeSelector extends React.Component {
  state = {
    range: 7,
    buttons: [
      { id: Math.random() * 1000000, value: 7 },
      { id: Math.random() * 1000000, value: 30 },
      { id: Math.random() * 1000000, value: 60 },
      { id: Math.random() * 1000000, value: 90 },
      { id: Math.random() * 1000000, value: 180 },
      { id: Math.random() * 1000000, value: 365 },
      { id: Math.random() * 1000000, value: 'max' },
    ],
  };

  handleClick = (e) => {
    const newSelect = this.state.buttons.find(
      (element) => `${element.id}` === e.target.id
    );
    this.setState({ range: newSelect.value });
    this.props.handleTimeFrame(newSelect.value);
  };

  render() {
    return (
      <Container>
        <StyledButton
          range={this.state.range}
          handleClick={this.handleClick}
          list={this.state.buttons}
        />
      </Container>
    );
  }
}
