import { useState } from "react";
import {
  Container,
  ButtonContainer,
  Button,
  Text,
} from "./rangeselector.styles";

const StyledButton = (props) => {
  return props.list.map((element) => {
    return (
      <ButtonContainer key={Math.random() * 10000000}>
        <Button
          selected={props.range === element.value}
          onClick={props.handleClick}
          id={element.id}
        />
        <Text>{element.value}</Text>
      </ButtonContainer>
    );
  });
};

function RangeSelector(props) {
  const [range, setRange] = useState(7);
  const [buttons, setButtons] = useState([
    { id: Math.random() * 1000000, value: 7 },
    { id: Math.random() * 1000000, value: 30 },
    { id: Math.random() * 1000000, value: 60 },
    { id: Math.random() * 1000000, value: 90 },
    { id: Math.random() * 1000000, value: 180 },
    { id: Math.random() * 1000000, value: 365 },
    { id: Math.random() * 1000000, value: "max" },
  ]);

  const handleClick = (e) => {
    const newSelect = buttons.find(
      (element) => `${element.id}` === e.target.id
    );
    setRange(newSelect.value);
    props.handleTimeFrame(newSelect.value);
    // this.props.handleTimeFrame(newSelect.value);
  };
  return (
    <Container>
      <StyledButton range={range} handleClick={handleClick} list={buttons} />
    </Container>
  );
}

export default RangeSelector;
