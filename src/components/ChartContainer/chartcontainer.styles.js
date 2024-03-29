import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0px;
  position: relative;
  border: 3px solid ${(props) => props.theme.quinary};
  min-height: 400px;
`;

export const ChartContainerText = styled(Base)`
  flex-direction: column;
  color: ${(props) => props.theme.secondary};
  position: absolute;
`;

export const Label = styled.div``;

export const NumberContainer = styled.div`
  font-weight: bold;
  font-size: 26px;
`;

export const Date = styled.div``;
