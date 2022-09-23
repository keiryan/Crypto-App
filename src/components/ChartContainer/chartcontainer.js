import {
  Container,
  ChartContainerText,
  Label,
  NumberContainer,
} from "./chartcontainer.styles";
import { AbbreviatedNumber, Chart } from "components";

export default function ChartContainer(props) {
    return (
      <Container>
        <ChartContainerText>
          <Label>{props.label}</Label>
          <NumberContainer>
            <AbbreviatedNumber number={props.headerNumber} fiat={props.fiat}/>
          </NumberContainer>
        </ChartContainerText>
        <Chart
          data={props.data}
          coin={props.coin}
          chartType={props.chartType}
          dataIndex={1}
        />
      </Container>
    );
}
