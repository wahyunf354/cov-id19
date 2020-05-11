import axios from "axios";
import displayChart from "./chart.js";
import globalCases from "./globalCases.js";

const dailyCovid = () => {
  axios
    .get("https://covid19.mathdro.id/api/daily")
    .then((res) => {
      displayChart(res.data);
    })
    .catch((err) => console.log(err));
};

const globalCasesApi = () => {
  axios.get("https://covid19.mathdro.id/api").then((res) => {
    console.log(res.data);
    globalCases(res.data);
  });
};

export { dailyCovid, globalCasesApi };
