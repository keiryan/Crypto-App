import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  overflow-y: auto;
`;

export const Base = styled.div`
  display: flex;
`;




