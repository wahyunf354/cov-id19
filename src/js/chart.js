import $ from "jquery";
import Chart from "chart.js";

const displayChart = (data) => {
  const dates = [];
  const comfirmed = [];
  const deaths = [];
  const recovers = [];

  data.forEach((date) => {
    dates.push(date.reportDate);
    comfirmed.push(date.totalConfirmed);
    deaths.push(date.deaths.total);
    recovers.push(date.totalRecovered);
  });

  const ctx = $("#chartGlobal");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Terinfeksi",
          data: comfirmed,
          borderColor: "#f2b900",
          borderWidth: 2,
          backgroundColor: ["rgba(255, 99, 132, 0)"],
        },
        {
          label: "Meninggal",
          data: deaths,
          borderColor: "#f26353",
          borderWidth: 2,
          backgroundColor: ["rgba(255, 99, 132, 0)"],
        },
        {
          label: "Sembuh",
          data: recovers,
          borderColor: "#52cc99",
          borderWidth: 2,
          backgroundColor: ["rgba(255, 99, 132, 0)"],
        },
      ],
    },
    options: {
      mode: "point",
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "top",
        labels: {
          fontColor: "#222b45",
          fontSize: 10,
          boxWidth: 10,
        },
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              // display: true,
              // labelString: 'Tanggal update',
            },
            ticks: {
              fontSize: 10,
              autoSkip: true,
              maxTicksLimit: 10,
            },
            gridLines: {
              display: true,
              color: "#ddd",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 10,
              autoSkip: true,
              maxTicksLimit: 7,
            },
            gridLines: {
              display: true,
              color: "#ddd",
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  });
};

const displayErrorChart = (err) => {
  $(".chart-container")
    .text("Maaf Terjadi Kesalahan " + err)
    .css("color", "black")
    .css("text-align", "center")
    .css("display", "flex")
    .css("align-items", "center")
    .css("justify-content", "center")
    .css("flex", 1);
};

export { displayChart, displayErrorChart };
