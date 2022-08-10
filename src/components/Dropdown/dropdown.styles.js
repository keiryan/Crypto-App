import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  padding: 0px 10px;
  margin: 0 20px;
  color: ${(props) => props.theme.secondary};
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary};
  position: relative;
  :hover {
  cursor: pointer;
}
`;

export const CurrentlySelectedCoinContainer = styled(Base)`
align-items: center;
  position: relative;
  padding: 10px 0px;
  border-radius: 8px;
`;

export const CurrentlySelectedCoinName = styled.div`
  padding: 0px 4px;
`;

export const ListContainer = styled(Base)`
  display: ${(props) => (props.toggled ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  top: 70%;
  right: 0px;
  padding: 10px 10px;
  border-radius: 8px;
  height: 250px;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  padding: 4px 12.5px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: rgba(200, 200, 200, 0.1);
  }
`;

export const IconContainer = styled(Base)`
  align-items: center;
  padding: 0px 4px;
`;
