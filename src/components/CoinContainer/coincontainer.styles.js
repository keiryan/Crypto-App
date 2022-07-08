import styled from "styled-components";
import { Base } from "../../app.styles";

export const TableContainer = styled(Base)`
width: 100%;
background-color: ${(props) => props.theme.tertiary};
padding: 10px 5px;
border-radius: 8px;
`
export const Table = styled.table`
font-size: 14px;
width: 100%;
`

export const TableRow = styled.tr`
`;

export const CoinIcon = styled.img`
width: 14px;
height: 14px;
margin: 0 5px;`;

export const CoinNameContainer = styled(Base)`
font-weight:bold;
align-items: center;`;

export const TableHeaderItem = styled.th`
color: ${(props) => props.theme.secondary};`;

export const TableItem = styled.td`
text-align: center;
color: ${(props) => props.theme.secondary};
width: ${(props) => props.width || "auto"};
padding: 10px 6px ;
`;

export const TableNumber = styled.td`
color: lime;
text-align: center;
`

export const HeaderItem = styled(Base)`
color: ${(props) => props.theme.secondary};
margin: 0px 10px;`;

export const ProgressContainer = styled(Base)`
justify-content: space-between;`;
