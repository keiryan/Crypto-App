import styled from "styled-components";
import {Base} from '../../app.styles'
import {Link} from 'react-router-dom'

export const Container = styled.nav`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.theme.secondary};
  height: 60px;
  /* height: 50px; */
  background-color: #191B1F;
  padding: 10px;
`;

export const LinkContainer = styled(Base)`
  display: flex;
`;

export const PageLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #2C2F36;`;

export const SideContainer = styled(Base)`
align-items: center;
`

/* export const PageLink = {
  
//   fontSize: "23px",
}; */

// export const PageLink = styled.div`
//     color: #fff;
//     text-decoration: none;
//     margin: 0 10px;
//     padding: 10px 20px;
//     border-radius: 5px;
//     background-color: #2C2F36;
// `;
