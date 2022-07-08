import styled from 'styled-components';
import { Base } from '../../app.styles';

export const OutsideBar = styled(Base)`
height: 10px;
flex: 1;
width: ${props => props.overrideWidth || '50px'};
background-color: #2172E5;
border-radius: 8px;
overflow: hidden;`

export const InsideBar = styled.div`
width: ${props => props.value / props.max * 100}%;
height: 100%;
background-color: #fff;
border-radius: 8px;`

