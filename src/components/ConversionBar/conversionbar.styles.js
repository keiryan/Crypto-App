import styled from 'styled-components';
import { Base } from '../../app.styles';

export const Container = styled(Base)`
justify-content: space-between;
align-items: center;`;

export const NumberContainer = styled(Base)`
align-items: center;
background-color: ${props => props.theme.quaternary};
border-radius: 8px;
overflow: hidden;
margin: 0 20px;
`

export const SymbolContainer = styled.div`
height: 100%;
background-color: #00D93B;
font-weight: bold;
padding: 10px;`

export const InputContainer = styled.div``

export const Input = styled.input`
background-color: transparent;
border: none;
outline: none;
color: ${props => props.theme.secondary};
font-size: 14px;
padding: 0px 10px;`;