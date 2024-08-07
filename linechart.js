const ctx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April"], // Change according to the current term
    datasets: [
      {
        label: "Percentage Obtained",
        data: [10, 55, 30, 92], // Sample data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(0, 0, 139, 0.1)", //fill color
        fill: true, // Shading the area under the line
        tension: 0.4, // This makes the line smooth (spline)
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
        title: {
          display: true,
          text: "Percentage (%)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, //display legend
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.raw + "%";
          },
        },
      },
    },
  },
});
///pie chart
