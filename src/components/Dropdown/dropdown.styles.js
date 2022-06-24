import styled from "styled-components";
// import Base from '../../app.styles'

const Base = styled.div`
  display: flex;
`;

export const Holder = styled(Base)`
position: relative;
`

export const Container = styled(Base)`
  flex-direction: column;
  padding: 0px 10px;
  color: white;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary};
`;

export const CurrentlySelectedCoinContainer = styled(Base)`
  padding: 10px 0px;
  border-radius: 8px;
`;

export const CurrentlySelectedCoinName = styled.div`
padding: 0px 4px;`

export const ListContainer = styled(Base)`
  display: ${(props) => (props.toggled ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
`;

export const ListItem = styled.div`
  padding: 4px 0px;
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