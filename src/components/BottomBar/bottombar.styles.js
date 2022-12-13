import styled from "styled-components";
import { Base } from "../../app.styles";
import { NavLink } from "react-router-dom";

export const Container = styled(Base)`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.quaternary};
  color: ${(props) => props.theme.secondary};
  padding: 8px;
  position: fixed;
  bottom: 0;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const IconContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  justify-content: center;
  font-weight: bold;
`;

export const IconText = styled.div``;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
`;
