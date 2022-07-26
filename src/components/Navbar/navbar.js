import React from "react";
import {
  Container,
  LinkContainer,
  PageLink,
  SideContainer,
  ThemeContainer,
} from "./navbar.styles";
import { Dropdown, SearchBar, SVG } from "components";

export default class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <SideContainer>
          <LinkContainer>
            <PageLink to="coinpage">Coinpage</PageLink>
            <PageLink to="portfolio">Portfolio</PageLink>
          </LinkContainer>
        </SideContainer>
        <SideContainer>
          <SearchBar />
          <Dropdown list={this.props.coinList} />
          <ThemeContainer onClick={this.props.toggleTheme}>
            <SVG name="moon" />
          </ThemeContainer>
        </SideContainer>
      </Container>
    );
  }
}
