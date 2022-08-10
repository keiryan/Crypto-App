import React, { useState } from "react";
import { SVG } from "components";
import { Container } from "./themecontainer.styles";

export default function ThemeContainer(props) {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
    props.toggleTheme();
  };

  return (
    <Container onClick={handleClick}>
      <SVG name={toggled ? "moon" : "sun"} />
    </Container>
  );
}
