import styled from 'styled-components'
import { Base } from '../../app.styles'

export const MiddleContainer = styled(Base)`
flex-direction: column;
width: 90vw;
align-items: center;
padding: 40px 0px;`


export const LoadMoreButton = styled.div`
background-color: ${(props) => props.theme.quaternary};
color: ${props => props.theme.secondary};
padding: 10px 20px;
border-radius: 8px;
margin: 20px;
display: ${props => props.length > 0 ? "block" : "none"};
:hover {
    cursor: pointer;
    color: orange;
}
`

export const Loading = styled.h2`
display: ${props => props.loading ? "block" : "none"};
color: ${props => props.theme.secondary}`;
