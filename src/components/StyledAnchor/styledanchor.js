import React from "react";
import {
  Container,
  IconContainer,
  Link,
  Spacer,
  Tooltip,
  TooltipContainer,
  TooltipPoint,
  TooltipText,
} from "./styledanchor.styles";
import { SVG } from "components";

export default class StyledAnchor extends React.Component {
  state = {
    link: this.props.link,
    clicked: false,
  };

  linkSplitter = (link) => {
    return link.split("www.")[1] || link.split("https://")[1];
  };

  copy = () => {
    navigator.clipboard.writeText(this.state.link);
    this.setState({ clicked: true });
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 1500);
  };

  render() {
    return (
      <Container>
        <Link href={this.props.link} target={"_blank"}>
          <IconContainer>
            <SVG name="link" />
          </IconContainer>
          <Spacer></Spacer>
          {this.props.link && this.linkSplitter(this.props.link)}
          <Spacer></Spacer>
        </Link>
        <IconContainer onClick={this.copy}>
          <TooltipContainer show={this.state.clicked}>
            <TooltipPoint show={this.state.clicked} />
            <Tooltip show={this.state.clicked}>
              <TooltipText show={this.state.clicked}>Copied!</TooltipText>
            </Tooltip>
          </TooltipContainer>
          <SVG
            overrideFill={this.state.clicked ? "lime" : "#fff"}
            name="copy"
          />
        </IconContainer>
      </Container>
    );
  }
}
