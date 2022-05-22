var labels = ["January", "February", "March", "April", "May", "June"];

var data = {
  labels: labels,
  datasets: [
    {
      label: "Acessos",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Likes",
      backgroundColor: "#00b4d8",
      borderColor: "#00b4d8",
      data: [0, 20, 55, 20, 36, 60, 80],
    },
  ],
};

var config = {
  type: "line",
  data: data,
  options: {
    animations: {
      tension: {
        duration: 2000,
        easing: "easeOutBack",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 90,
      },
    },
  },
};

var myChart = new Chart(document.getElementById("myChart"), config);
