import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  align-items: center;
`;

export const IconContainer = styled(Base)`
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

export const Number = styled.div`
  color: ${(props) => (props.number > 0 ? props.theme.number.up : props.theme.number.down)};
  text-align: center;
  font-weight: bold;
`;
