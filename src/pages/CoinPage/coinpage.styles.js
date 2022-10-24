import styled from "styled-components";
import { Base } from "app.styles";

export const MiddleContainer = styled(Base)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 40px;
  @media (max-width: 1000px) {
    align-items: flex-start;
  }
`;
