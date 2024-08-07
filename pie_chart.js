let progressChart;

function createCircularProgressChart(percentage) {
  const ctx = document.getElementById("progressChart").getContext("2d");

  // Determine fill color based on percentage
  let fillColor;
  if (percentage <= 30) {
    fillColor = "#FF4433"; // Red
  } else if (percentage <= 50) {
    fillColor = "#FFBF00"; // Yellow
  } else if (percentage <= 70) {
    fillColor = "#FFD700"; // Gold
  } else if (percentage <= 80) {
    fillColor = "#90EE90"; // Light Green
  } else {
    fillColor = "#228B22"; // Green
  }

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [fillColor, "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    rotation: -0.5 * Math.PI,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  // Destroy existing chart instance if any
  if (progressChart) {
    progressChart.destroy();
  }

  progressChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: options,
  });

  document.getElementById("percentage-display").textContent = percentage + "%";
}

function updatePercentage() {
  const percentage = parseInt(
    document.getElementById("percentage-input").value,
    10
  );
  if (percentage >= 0 && percentage <= 100) {
    createCircularProgressChart(percentage);
  } else {
    alert("Please enter a percentage between 0 and 100.");
  }
}

// Initial chart creation
createCircularProgressChart(20); // Default percentage
