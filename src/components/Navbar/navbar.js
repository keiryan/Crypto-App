import React from "react";
import {
  Container,
  LinkContainer,
  PageLink,
  SideContainer,
} from "./navbar.styles";
import { Dropdown, SearchBar } from "components";

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
          <img src="../../icons/Iconly-Bulk-Scan.png" alt="test" />
        </SideContainer>
      </Container>
    );
  }
}
