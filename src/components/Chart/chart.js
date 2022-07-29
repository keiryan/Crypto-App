import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";
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

const ChartLegend = {
  Line: {
    chartType: "Line",
    config: {
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointRadius: 0,
            borderWidth: 3,
          },
        ],
      },
      options: {
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
            display: true,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        tension: 0.5,
      },
    },
  },

  Bar: {
    chartType: "Bar",
    config: {
      data: {
        labels: [],
        datasets: [
          {
            label: "Dataset 1",
            data: [],
            backgroundColor: "#2172E5",
            borderRadius: 4,
          },
        ],
      },
      options: {
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
            display: true,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        tension: 0.5,
      },
    },
  },

  BottomLine: {
    chartType: "Line",
    config: {
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            borderColor: "#AFD0BF",
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointRadius: 0,
            borderWidth: 3,
            tension: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
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
      },
    },
  },
  SmallLine: {
    chartType: "Line",
    config: {
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            borderColor: "#AFD0BF",
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointRadius: 0,
            borderWidth: 2,
            tension: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
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
      },
    },
  },
};

export default function Chart(props) {
  const theme = useTheme();
  const chartType = ChartLegend[props.chartType];
  const Chart = bank[chartType.chartType];
  const config = {
    data: {
      labels: props.data.map((element, index) => index + 1),
      datasets: [
        {
          ...chartType.config.data.datasets[0],
          label: "",
          data: props.data.map((element, index) => props.dataIndex ? element[props.dataIndex] : element),
          borderColor: props.color || theme.chart.line.large,
          backgroundColor: props.color || theme.primary,
        },
      ],
    },
    options: {
      ...chartType.config.options,
    },
  };

  return <Chart data={config.data} options={config.options} />;
}
