import {
  Container,
  CurrentlySelectedCoinContainer,
  IconContainer,
  CurrentlySelectedCoinName,
  ListContainer,
  ListItem,
  Holder,
} from "./dropdown.styles";
import React from "react";

export const List = (props) => {
  return (
    <ListContainer toggled={props.toggled}>
      {props.list.map((element) => {
        return (
          <ListItem key={Math.random() * 1000000}>{element.name}</ListItem>
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

  render() {
    return (
      <Holder>
        <Container>
          <CurrentlySelectedCoinContainer onClick={this.handleToggle}>
            <IconContainer>
              <img
                src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-round-icon--18.png"
                width="14px"
                alt=""
              />
            </IconContainer>
            <CurrentlySelectedCoinName>USD</CurrentlySelectedCoinName>
          </CurrentlySelectedCoinContainer>
          <List list={this.props.list} toggled={this.state.toggled} />
        </Container>
      </Holder>
    );
  }
}
