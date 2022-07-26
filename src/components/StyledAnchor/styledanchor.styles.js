import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.quaternary};
  padding: 4px;
  border-radius: 8px;
  margin: 8px 0px;
  :hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled(Base)`
  margin: 0px 4px;
  padding-top: 0px;
  position: relative;
`;

export const Spacer = styled.div`
  flex: 1;
  margin: 0px 14px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  flex: 1;
  color: ${(props) => props.theme.secondary};
`;

export const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  left: 25px;
  transition: all 1s ease;
`;

export const Tooltip = styled.div`
  transition: all 1s ease;
  background-color: green;
  font-weight: bold;
  padding: ${(props) => (props.show ? "10px" : "0px")};
  border-radius: 8px;
  max-height: ${(props) => (props.show ? "1000px" : "0px")};
`;

export const TooltipText = styled.div`
  transition: all 0.8s ease;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const TooltipPoint = styled.div`
  transition: all 1s ease;
  width: 0;
  height: 0;
  border-top: ${(props) =>
    props.show ? "10px solid transparent" : "0px solid transparent"};
  border-bottom: ${(props) =>
    props.show ? "10px solid transparent" : "0px solid transparent"};
  border-right: ${(props) =>
    props.show ? "10px solid green" : "0px solid green"};
`;
