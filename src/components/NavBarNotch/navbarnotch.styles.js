import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
/* justify-content: space-between; */
align-items: center;
/* width: 50%; */
background-color: ${props => props.theme.tertiary};
padding: 12px 30px;
border-radius: 0px 0px 8px 8px;`;

export const NavBarNotchItem = styled(Base)`
align-items: center;
color: ${props => props.theme.secondary};
margin: 0px 16px;
`

export const IconContainer = styled(Base)`
align-items: center;`;


export const NavBarNotchText = styled.div`
margin: 0px 5px;
font-size: 14px;
font-weight: bold;`
