import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled.abbr`
  text-decoration: none;
`;

export const StandardContainer = styled(Base)`
  justify-content: ${(props) => props.flex || "flex-start"};
`;

export const Currency = styled.div`
  margin: 0 5px;
`;
