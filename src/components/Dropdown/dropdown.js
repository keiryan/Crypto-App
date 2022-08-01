import React from "react";
import {
  Container,
  CurrentlySelectedCoinContainer,
  IconContainer,
  CurrentlySelectedCoinName,
  ListContainer,
  ListItem,
} from "./dropdown.styles";
import { SVG } from 'components';

export const List = (props) => {
  return (
    <ListContainer toggled={props.toggled}>
      {props.list.map((element) => {
        return (
          <ListItem key={element.name} onClick={props.handleSelect}>{element.name.toUpperCase()}</ListItem>
        );
      })}
    </ListContainer>
  );
};

export default class Dropdown extends React.Component {
  state = {
    toggled: false,
    currentCoin: {},
  };

  handleToggle = () => {
    this.setState({ toggled: !this.state.toggled });
  };

  handleSelect = () => {
    this.setState({ toggled: false });
  }

  render() {
    return (
        <Container>
          <CurrentlySelectedCoinContainer onClick={this.handleToggle}>
            <IconContainer>
              <SVG name={'currency'}/>
            </IconContainer>
            <CurrentlySelectedCoinName>USD</CurrentlySelectedCoinName>
          </CurrentlySelectedCoinContainer>
          <List list={this.props.list} toggled={this.state.toggled} handleSelect={this.handleSelect}/>
        </Container>

    );
  }
}
