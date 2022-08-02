import React from "react";
import axios from "axios";
import {
  Container,
  SearchInput,
  SearchForm,
  IconContainer,
  StyledLink,
  ListContainer,
} from "./search.styles";
import { SVG } from "components";

function ListOfCoins(props) {
  return (
    <ListContainer onMouseLeave={props.left}>
      {props.list.map((element) => {
        return (
          <StyledLink
            key={element.name}
            to={`coin/${element.id}`}
            onClick={props.clearList}
          >
            {element.name}
          </StyledLink>
        );
      })}
    </ListContainer>
  );
}

export default class SearchBar extends React.Component {
  state = {
    searchValue: "",
    list: [],
    timeOut: false,
    focused: true,
  };

  timeOut = false;

  callAPI = async () => {
    this.timeOut = false;
    const data = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${this.state.searchValue}`
    );
    this.setState({ list: [...data.data] });
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
    if (!this.timeOut) {
      if (this.state.searchValue.length > 0) {
        this.timeOut = true;
        setTimeout(this.callAPI, 1000);
      } else {
        this.setState({ list: [] });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ searchValue: "" });
  };

  clearList = () => {
    this.setState({ searchValue: "", list: [] });
  };

  render() {
    return (
      <>
        <Container>
          <IconContainer onClick={this.handleSubmit}>
            <SVG name="search" />
          </IconContainer>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchInput
              onChange={this.handleChange}
              value={this.state.searchValue}
              type="text"
              placeholder="Search"
            />
          </SearchForm>
          <ListOfCoins left={this.clearList} list={this.state.list} clearList={this.clearList} />
        </Container>
      </>
    );
  }
}
