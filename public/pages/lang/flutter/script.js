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
  options: {},
};

var myChart = new Chart(document.getElementById("myChart"), config);
