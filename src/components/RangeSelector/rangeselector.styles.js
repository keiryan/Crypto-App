import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  margin: 20px 0;
`;

export const Button = styled.div`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  border: solid 2px lime;
  background-color: ${(props) => props.selected && "lime"};
  margin: 0 6px;
`;

export const ButtonContainer = styled(Base)`
  align-items: center;
  margin: 0 20px;
`;

export const Text = styled.div`
  color: ${(props) => props.theme.secondary};
`;
