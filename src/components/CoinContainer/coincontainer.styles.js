import styled from "styled-components";
import { Link } from "react-router-dom";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* @media (max-width: 1000px) {
  } */
`;

export const TableContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  @media (max-width: 1000px) {
    align-items: flex-start;
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  font-size: 14px;
  width: 100%;
  background-color: ${(props) => props.theme.tertiary};
  padding: 10px 5px;
  border-radius: 8px;
  @media (max-width: 1000px) {
    overflow-x: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TableRow = styled.tr.attrs((props) => ({}))``;

export const CoinIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 5px;
`;

export const CoinNameContainer = styled(Base)`
  font-weight: bold;
  align-items: center;
`;

export const CoinName = styled.div`
  color: ${(props) => props.theme.secondary};
  margin-right: 4px;
`;

export const TableHeaderItem = styled.th`
  color: ${(props) => props.theme.secondary};
`;

export const TableItem = styled.td`
  text-align: center;
  color: ${(props) => props.theme.secondary};
  width: ${(props) => props.width || "auto"};
  padding: 10px 6px;
`;

export const TableNumber = styled.td``;

export const TableNumberContainer = styled(Base)`
  width: 100%;
  justify-content: center;
`;

export const HeaderItem = styled(Base)`
  color: ${(props) => props.theme.secondary};
  margin: 0px 10px;
`;

export const ProgressContainer = styled(Base)`
  justify-content: space-between;
`;

export const Loading = styled.h2`
  display: ${(props) => (props.loading ? "block" : "none")};
  color: ${(props) => props.theme.secondary};
`;

export const LoadMoreButton = styled.div`
  background-color: ${(props) => props.theme.quaternary};
  color: ${(props) => props.theme.secondary};
  padding: 10px 20px;
  border-radius: 8px;
  margin: 20px;
  display: ${(props) => (props.length > 0 ? "block" : "none")};
  :hover {
    cursor: pointer;
    color: orange;
  }
`;

export const SmallChartContainer = styled.div`
  max-width: 100px;
  height: 40px;
  margin: 0 auto;
`;
