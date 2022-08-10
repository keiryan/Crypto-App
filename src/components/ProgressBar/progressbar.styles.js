import styled from "styled-components";
import { Base } from "../../app.styles";

export const OutsideBar = styled(Base)`
  height: 10px;
  flex: 1;
  width: ${(props) => props.overrideWidth || "50px"};
  background-color: ${(props) => props.theme.progressBar.background};
  border: none;
  border-radius: 8px;
  overflow: hidden;
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
