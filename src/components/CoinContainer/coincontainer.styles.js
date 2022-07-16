import styled from "styled-components";
import { Base } from "../../app.styles";

export const TableContainer = styled(Base)`
flex-direction: column;
align-items: center;
width: 100%;
margin: 20px 0px;
`
export const Table = styled.table`
font-size: 14px;
width: 100%;
background-color: ${(props) => props.theme.tertiary};
padding: 10px 5px;
border-radius: 8px;
`

export const IconContainer = styled(Base)`
align-items: center;
justify-content: center;
margin-top: 2px;
`

export const TableRow = styled.tr``;

export const CoinIcon = styled.img`
width: 14px;
height: 14px;
margin: 0 5px;`;

export const CoinNameContainer = styled(Base)`
font-weight:bold;
align-items: center;`;

export const CoinName = styled.div`
margin-right: 4px;`;

export const TableHeaderItem = styled.th`
color: ${(props) => props.theme.secondary};`;

export const TableItem = styled.td`
text-align: center;
color: ${(props) => props.theme.secondary};
width: ${(props) => props.width || "auto"};
padding: 10px 6px ;
`;

export const TableNumber = styled.td`
color: ${props => props.number > 0 ? 'lime' : 'red'};
text-align: center;
`

export const TableNumberContainer = styled(Base)`
width: 100%;
justify-content: center;
align-items: center;`;

export const HeaderItem = styled(Base)`
color: ${(props) => props.theme.secondary};
margin: 0px 10px;`;

export const ProgressContainer = styled(Base)`
justify-content: space-between;`;

export const Loading = styled.h2`
display: ${props => props.loading ? "block" : "none"};
color: ${props => props.theme.secondary};`;

export const LoadMoreButton = styled.div`
background-color: ${(props) => props.theme.quaternary};
color: ${props => props.theme.secondary};
padding: 10px 20px;
border-radius: 8px;
margin: 20px;
display: ${props => props.length > 0 ? "block" : "none"};
:hover {
    cursor: pointer;
    color: orange;
}
`
