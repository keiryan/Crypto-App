import React from "react";
import { SVG } from "components";
import { Container } from "./themecontainer.styles";

export default class ThemeContainer extends React.Component {
  state = {
    toggled: false,
  };

  handleClick = () => {
    this.setState({ toggled: !this.state.toggled });
    this.props.toggleTheme()
  };

  render() {
    return (
      <Container onClick={this.handleClick}>
        <SVG name={this.state.toggled ? "moon" : "sun"} />
      </Container>
    );
  }
}
