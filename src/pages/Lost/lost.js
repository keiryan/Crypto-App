import { Container, Header, StyledLink, Subeader } from "./lost.styles";

export default function Lost() {
  return (
    <div>
      <Container>
        <Header>Lost?</Header>
        <Subeader>Theres no place like <StyledLink to='/'>home</StyledLink></Subeader>
      </Container>
    </div>
  );
}
