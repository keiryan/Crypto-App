const ChartLegend = {
  Line: {
    api: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily",
    dataType: "prices",
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
    api: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily",
    dataType: "total_volumes",
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
};

export const chartLocator = (input) => {
  if (input in ChartLegend) {
    return ChartLegend[input];
  }
};
