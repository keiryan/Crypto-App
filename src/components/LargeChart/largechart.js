import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
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

export default class LargeChart extends React.Component {
    state = {
        coin: {},
    }

  async componentDidMount() {
    const coin = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=true`
    );
    this.setState({coin: coin.data[0]});
  }

  render() {
    console.log(this.props)
    const data = {
      labels: new Array(this.state.coin?.sparkline_in_7d?.price.length).fill(""),
      datasets: [
        {
          label: this.state.coin.id,
          data: this.state.coin?.sparkline_in_7d?.price,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointRadius: 0,
          borderWidth: 3,
        },
      ],
    };
    return (
        <Line options={options} data={data} />
    );
  }
}
