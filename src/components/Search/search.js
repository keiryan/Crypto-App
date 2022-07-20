import React from "react";
import { Container, SearchInput, SearchForm, IconContainer} from "./search.styles";
import { SVGIcon } from "components";
import iconFinder from "icons";

export default class SearchBar extends React.Component {
  state = {
    searchValue: "",
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ searchValue: "" });
  };
  render() {
    return (
      <Container>
        <IconContainer onClick={this.handleSubmit}>
          <SVGIcon icon={iconFinder('search')} />
        </IconContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            onChange={this.handleChange}
            value={this.state.searchValue}
            type="text"
            placeholder="Search"
          />
        </SearchForm>
      </Container>
    );
  }
}
