import React from "react";
import {
  Container,
  ChartContainerText,
  Label,
  NumberContainer,
} from "./chartcontainer.styles";
import { AbbreviatedNumber, Chart } from "components";

export default class ChartContainer extends React.Component {
  render() {
    return (
      <Container>
        <ChartContainerText>
          <Label>{this.props.label}</Label>
          <NumberContainer>
            <AbbreviatedNumber number={this.props.headerNumber} />
          </NumberContainer>
        </ChartContainerText>
        <Chart
          data={this.props.data}
          coin={this.props.coin}
          chartType={this.props.chartType}
          dataIndex={1}
          color={this.props.color}
        />
      </Container>
    );
  }
}
