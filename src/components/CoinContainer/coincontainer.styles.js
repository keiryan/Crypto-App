import styled from "styled-components";
import { Base } from "../../app.styles";

export const TableContainer = styled(Base)`
width: 100%;
background-color: ${(props) => props.theme.tertiary};
padding: 10px 5px;
border-radius: 8px;
`
export const Table = styled.table`
width: 100%;
`

export const CoinIcon = styled.img`
width: 12px;`;

export const CoinNameContainer = styled.div`
width: 12px;`;

export const CoinHeader = styled.tr`
`;

export const TableHeaderItem = styled.th`
color: ${(props) => props.theme.secondary};`;

export const TableItem = styled.td`
text-align: center;
color: ${(props) => props.theme.secondary};`;

export const TableNumber = styled.td`
color: lime`

export const HeaderItem = styled(Base)`
color: ${(props) => props.theme.secondary};
margin: 0px 10px;`;