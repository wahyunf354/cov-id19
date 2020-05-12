import axios from "axios";
import { displayChart, displayErrorChart } from "./chart.js";
import { globalCases, displayErrorGlobalCases } from "./globalCases.js";
import { selectCountry } from "./selectContry.js";

const dailyCovid = () => {
  return new Promise((resolve, rejects) => {
    axios
      .get("https://covid19.mathdro.id/api/daily")
      .then((res) => {
        displayChart(res.data);
        resolve(true);
      })
      .catch((err) => {
        displayErrorGlobalCases(err);
        rejects(false);
      });
  });
};

const globalCasesApi = () => {
  axios
    .get("https://covid19.mathdro.id/api")
    .then((res) => {
      globalCases(res.data);
    })
    .catch((err) => displayErrorChart(err));
};

const countryAPI = () => {
  axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
    selectCountry(res.data);
  });
};

const covidCasesCountryAPI = (codeCountry) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${codeCountry}`)
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(err);
      });
  });
};

export { dailyCovid, globalCasesApi, countryAPI, covidCasesCountryAPI };
