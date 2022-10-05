import styled from "styled-components";
import { Base } from "../../app.styles";

export const OutsideBar = styled(Base)`
  height: ${(props) => props.height || "10px"};
  flex: 1;
  width: ${(props) => props.overrideWidth || "50px"};
  background-color: ${(props) => props.theme.progressBar.background};
  border: none;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const InsideBar = styled.div.attrs(({ width }) => ({
  style: {
    width,
  },
}))`
  background-color: ${(props) => props.theme.progressBar.color};
  height: 100%;
  border-radius: 8px;
`;

export const Percentage = styled.div`
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  position: absolute;
`;
