import styled from "styled-components";
import { Base } from "../../app.styles";
import { Link } from "react-router-dom";

export const Container = styled(Base)`
  width: 200px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.quaternary};
  padding: 0px 10px;
  position: relative;
`;

export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  padding: 0px 10px;
  font-size: 14px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  ::placeholder {
    color: #fff;
  }
`;

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
  color: ${(props) => props.theme.secondary};
  padding: 5px 10px;
  :hover {
    background-color: ${(props) => props.theme.quaternary};
  }
`;
