import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const BaseForm = styled.form`
  display: flex;
  width: 200px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.quaternary};
  padding: 0px 10px;
  position: relative;
`;

export const BaseInput = styled.input`
  padding: 0px 10px;
  font-size: 14px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  ::placeholder {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Container = styled(Base)`
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 6%;
  position: relative;
  z-index: 0;
  @media (max-width: 1000px) {
    padding-top: 12%;
  }
`;
