// var csv = require("jquery-csv");
// var tracker = csv.toObjects(cleaned1.csv);
var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// const csv_link = "https://files.catbox.moe/mrhbpc.txt";
var fr = new FileReader();
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [14.5, 14.9, 14.0, 13.5, 14.4, 15.9],
        borderColor: "red",
        fill: false,
      },
      {
        data: [30.0, 37.9, 40.6, 39.9, 50.4, 48.0],
        borderColor: "green",
        fill: false,
      },
      {
        data: [54.2, 42.3, 45.9, 47.1, 74.2, 78.6],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 700,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100,
          },
        },
      ],
    },
    legend: { display: false },
  },
});
fr.readAsText(Crime_Data_SW.txt);
fr.readFile("Input.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
// console.log(
//   Papa.parse("Crime_Data_SW.txt", {
//     header: true,
//     delimiter: ",",
//     skipEmptyLines: true,
//   })
// );
