import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative; 
  scrollbar-gutter: stable;
`;







