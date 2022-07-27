import styled from "styled-components";
import { Link } from "react-router-dom";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  align-items: center;
  margin: auto 20px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h1`
  margin-bottom: 0;
  color: ${(props) => props.theme.secondary};
`;

export const Subeader = styled.h2`
  color: ${(props) => props.theme.secondary};
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.secondary};
  text-decoration: underline;
`;
