import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Base } from '../../app.styles'

export const Container = styled.nav`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.theme.secondary};
  height: 60px;
  background-color: #191B1F;
  padding: 10px;
`;

export const LinkContainer = styled(Base)`
  display: flex;
`;

export const PageLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${props => props.theme.quaternary};`;

export const SideContainer = styled(Base)`
align-items: center;
`