import styled from "styled-components";
import { Link } from "react-router-dom";
import { Base, BaseInput, BaseForm } from "../../app.styles";

export const SearchForm = styled(BaseForm)``;

export const SearchInput = styled(BaseInput)``;

export const IconContainer = styled(Base)`
  align-items: center;
  height: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const ListContainer = styled(Base)`
  background-color: ${(props) => props.theme.quinary};
  flex-direction: column;
  left: 10%;
  top: 100%;
  position: absolute;
  overflow-y: auto;
  z-index: 999;
  border-radius: 0px 0px 8px 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LinkStyle = styled.div`
  color: ${(props) => props.theme.secondary};
  padding: 5px 10px;
  :hover {
    background-color: ${(props) => props.theme.quaternary};
  }
`;
