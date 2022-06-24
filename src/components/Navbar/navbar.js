import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Container,
  LinkContainer,
  PageLink,
  SideContainer,
} from "./navbar.styles";
import SearchBar from "../Search/search";
import Dropdown from "components/Dropdown/dropdown";

export default class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <SideContainer>
          <LinkContainer>
            <PageLink to="/coinpage">Coinpage</PageLink>
            <PageLink to="/portfolio">Portfolio</PageLink>
          </LinkContainer>
        </SideContainer>
        <SideContainer>
          <SearchBar />
          <Dropdown list={this.props.coinList}/>
          <img src="../../icons/bitcoin.png" />
        </SideContainer>
        {/* <Outlet/> */}
      </Container>
    );
  }
}
