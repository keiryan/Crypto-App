import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Base } from "../../app.styles";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.secondary};
  height: 60px;
  background-color: ${(props) => props.theme.quinary};
  padding: 10px;
`;

export const LinkContainer = styled(Base)`
  display: flex;
`;

export const PageLink = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  margin: 0 10px;
  width: 120px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.tertiary};
  font-weight: bold;
  &.active {
    background: ${(props) => props.theme.quaternary};
  }
`;

export const SideContainer = styled(Base)`
  align-items: center;
`;

export const ThemeContainer = styled.div`
position: relative;`;
