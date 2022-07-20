import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  width: 90vw;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.secondary};
`;

export const DataContainer = styled(Base)`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) => props.theme.tertiary};
  margin: 4px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const SmallDataContainer = styled(DataContainer)`
  flex: 1;
`;

export const CoinNameContainer = styled(Base)`
  font-weight: bold;
  margin: 8px 0px;
`;

export const CoinName = styled.div``;

export const CoinSymbol = styled.div`
  text-transform: uppercase;
  margin: 0px 4px;
`;

export const CoinProfile = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;

export const TopContainers = styled(Base)``;

export const Description = styled.p`
line-height: 26px;
text-align: justify;
  a {
    text-decoration: none;
    color: royalblue;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const IconContainer = styled.div`
  margin: 4px 4px;
  padding-top: 4px;
`;

export const LinkContainer = styled(Base)`
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 2px 10px;
  border-radius: 8px;
  margin: 8px 0px;
`;

export const CoinPrice = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  margin: 12px 0px;
  padding: 0px;
`;

export const ListHeader = styled.h3`
margin: 0;`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  margin: 0 20px;
`;

export const NumberContainer = styled(Base)`
align-items: center;`;

export const AllTimeContainer = styled(Base)``;

export const DataType = styled.span`
color: ${(props) => props.color || props.theme.secondary};
margin: 0px 4px;
font-weight: bold;`;

export const DataValue = styled.div``;

export const ListContainer = styled.div`
width: 100%;`

export const LargeIconContainer = styled.div`
margin: 6px 0px;
`;