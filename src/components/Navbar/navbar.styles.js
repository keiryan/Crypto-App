import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 998;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.secondary};
  height: 60px;
  background-color: ${(props) => props.theme.quinary};
  padding: 10px;
  width: 100%;
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
  position: relative;
`;

export const NotchContainer = styled(Base)`
  align-items: center;
  background-color: ${(props) => props.theme.tertiary};
  padding: 12px 30px;
  border-radius: 0px 0px 8px 8px;
`;

export const NavBarNotchItem = styled(Base)`
  align-items: center;
  color: ${(props) => props.theme.secondary};
  margin: 0px 16px;
`;

export const IconContainer = styled(Base)`
  align-items: center;
`;

export const Icon = styled.img`
  width: 16px;
  margin: 0px 8px;
`;

export const NavBarNotchText = styled.div`
  margin: 0px 5px;
  font-size: 14px;
  font-weight: bold;
`;
