import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wave = styled.div`
  width: 5px;
  height: 25px;
  background: linear-gradient(45deg, #ff6384, #993b4f);
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
  :nth-child(${(props) => props.index}) {
    animation-delay: ${(props) => 0.1 * props.index}s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
