import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  width: 200px;
  height: 35px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #2c2f36;
  padding: 0px 10px;
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
