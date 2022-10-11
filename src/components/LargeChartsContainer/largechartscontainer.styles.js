import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Spacer = styled.div`
  width: 4%;
`;
