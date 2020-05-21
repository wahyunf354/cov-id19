import axios from 'axios';
import { displayChart, displayErrorChart } from './chart';
import { globalCases, displayErrorGlobalCases } from './globalCases';
// eslint-disable-next-line import/no-cycle
import { selectCountry } from './selectContry';
import { newsContent } from './news';

const dailyCovid = () => new Promise((resolve, rejects) => {
  axios
    .get('https://covid19.mathdro.id/api/daily')
    .then((res) => {
      displayChart(res.data);
      resolve(true);
    })
    .catch((err) => {
      displayErrorGlobalCases(err);
      rejects(err);
    });
});

const globalCasesApi = () => {
  axios
    .get('https://covid19.mathdro.id/api')
    .then((res) => {
      globalCases(res.data);
    })
    .catch((err) => displayErrorChart(err));
};

const countryAPI = () => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      selectCountry(res.data);
    });
};

const covidCasesCountryAPI = (codeCountry) => new Promise((resolve, reject) => {
  axios
    .get(`https://covid19.mathdro.id/api/countries/${codeCountry}`)
    .then((res) => resolve(res.data))
    .catch((err) => {
      reject(err);
    });
});

const API_KEY = 'b6f089ca3d704a47b97dff71c7efc626';
const newsAPI = () => {
  axios
    .get(
      `http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${API_KEY}`,
    )
    .then((res) => newsContent(res.data.articles));
};

export {
  dailyCovid,
  globalCasesApi,
  countryAPI,
  covidCasesCountryAPI,
  newsAPI,
};
