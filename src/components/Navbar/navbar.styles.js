import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 998;
  @media (max-width: 1000px) {
  }
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
  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

export const LinkContainer = styled(Base)`
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
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
    background-color: ${(props) => props.theme.quaternary};
  }
`;

export const SideContainer = styled(Base)`
  align-items: center;
`;

export const ThemeContainer = styled.div`
  position: relative;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NotchContainer = styled(Base)`
  align-items: center;
  background-color: ${(props) => props.theme.tertiary};
  padding: 12px 30px;
  border-radius: 0px 0px 8px 8px;
  @media (max-width: 1000px) {
    overflow-x: scroll;
    width: 100%;
    justify-content: center;
    background-color: ${(props) => props.theme.quaternary};
    border-radius: 0px;
  }
`;

export const NavBarNotchItem = styled(Base)`
  align-items: center;
  color: ${(props) => props.theme.secondary};
  margin: 0px 16px;
  @media (max-width: 1000px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

export const IconContainer = styled(Base)`
  align-items: center;
`;

export const Icon = styled.img`
  width: 16px;
  margin: 0px 6px;
`;

export const NavBarNotchText = styled.div`
  margin: ${props => props.margin ? "0px 6px" : '0'};
  font-size: 14px;
  font-weight: bold;
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 1000px) {
    font-size: 24px;
    font-weight: bold;
    display: block;
    color: ${(props) => props.theme.secondary};
  }
`;

export const SearchBarContainer = styled.div`
 @media (max-width: 1000px) {
    display: none;
  }`;
