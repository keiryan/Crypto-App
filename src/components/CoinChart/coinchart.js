import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Container } from "./coinchart.styles";

//function that loops through an array and return every 10th element

const testData = [1, 2, 3, 4, 5, 1, 3, 2, 6, 1, 25];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },

  scales: {
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  tension: 0.5,
};

export default class CoinChart extends React.Component {
  state = {
    data: {
      labels: new Array(this.props.data.length).fill(""),
      datasets: [
        {
          label: this.props.name,
          data: this.props.data,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointRadius: 0,
          borderWidth: 0.8,
        },
      ],
    },
  };

  render() {
    return (
      <Container>
        <Line options={options} data={this.state.data} />
      </Container>
    );
  }
}
