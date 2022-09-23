import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";
import Chart from "chart.js/auto";

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
            fill: "origin",
            backgroundColor: "rgba(0, 200, 200, 0.5)",
            borderColor: "rgb(255, 99, 132)",
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


export default function SmartChart(props) {
  const theme = useTheme();
  const chartType = ChartLegend[props.chartType];
  const NewChart = bank[chartType.chartType];
  const config = {
    data: {
      labels: props.data.map((element, index) => {
        if(props.chartType === 'Line' || props.chartType === 'Bar'){
          return new Date(element[0]).toString().split(' ')[2];
        } else {
          return index + 1
        }
      }),
      datasets: [
        {
          ...chartType.config.data.datasets[0],
          label: "",
          data: props.data.map((element, index) =>
            props.dataIndex ? element[props.dataIndex] : element
          ),
          borderColor: theme.chart[chartType.chartType.toLowerCase()].color || theme.chart.line.large,
          backgroundColor: theme.chart[chartType.chartType.toLowerCase()].backgroundColor || theme.primary,
        },
      ],
    },
    options: {
      ...chartType.config.options,
    },
  };

  return <NewChart data={config.data} options={config.options} />;
}
