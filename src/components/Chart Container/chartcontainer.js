import React from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Container,
  ChartContainerText,
  DataContainer,
  Label,
  NumberContainer,
  Date,
} from "./chartcontainer.styles";
import { chartLocator } from "../../utils/ChartLegend";
import { AbbreviatedNumber } from "components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const bank = {
  Line: Line,
  Bar: Bar,
};

export default class ChartContainer extends React.Component {
  state = {
    coin: [],
    loading: true,
    config: {
      data: {},
      options: {},
    },
  };

  async componentDidMount() {
    const chartType = chartLocator(this.props.chartType);
    const data = await axios(chartType.api);
    this.setState({
      loading: false,
      coin: data.data.prices,
      config: {
        data: {
          labels: data.data[chartType.dataType].map(
            (element, index) => index + 1
          ),
          datasets: [
            {
              ...chartType.config.data.datasets[0],
              label: "",
              data: data.data[chartType.dataType].map(
                (element, index) => element[1]
              ),
            },
          ],
        },
        options: {
          ...chartType.config.options,
        },
      },
    });
  }

  Chart = bank[this.props.chartType];

  render() {
    return (
      <Container>
        <ChartContainerText>
          <Label>{this.props.label}</Label>
          <NumberContainer>
            <AbbreviatedNumber number={this.state.coin?.[0]?.[1]} />
          </NumberContainer>
        </ChartContainerText>
        {!this.state.loading && (
          <this.Chart
            data={this.state.config.data}
            options={this.state.config.options}
          />
        )}
      </Container>
    );
  }
}
