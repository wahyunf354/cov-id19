import $ from "jquery";
import { covidCasesCountryAPI } from "./api";
import formatNumber from "./tools/numberFormat";

const selectCountry = (datas) => {
  datas.forEach((data) => {
    if (data.alpha2Code == "ID") {
      $(".search-country .countryCode").append(`
        <option value="${data.alpha2Code}" selected="selected" key="${data.alpha2Code}">${data.name}</option>
        `);
    } else {
      $(".search-country .countryCode").append(`
          <option value="${data.alpha2Code}" key="${data.alpha2Code}">${data.name}</option>
        `);
    }
  });
};

const displayCountyCases = (codeCountry) => {
  const result = covidCasesCountryAPI(codeCountry);
  result
    .then((result) => {
      $(".data-regional").html(`
      <div class="deaths">
        <p>Meninggal</p>
        ${formatNumber(result.deaths.value)}
      </div>
      <div class="confirmed">
        <p>Terinfeksi</p>
        ${formatNumber(result.confirmed.value)}
      </div>
      <div class="recovered">
        <p>Sembuh</p>
        ${formatNumber(result.recovered.value)}
      </div>
    `);
    })
    .catch((err) => {
      $(".data-regional").html(`
      <p>Maaf Terjadi Kesalahan : negara tersebut tidak terdaftar</p>
      `);
    });
};

const hendleSelectChange = () => {
  $(".countryCode").change(() => {
    const codeCountry = $(".countryCode").val();
    displayCountyCases(codeCountry);
  });
};

const hendleSelectNotChange = () => {
  const code = "ID";
  displayCountyCases(code);
};

export { selectCountry, hendleSelectChange, hendleSelectNotChange };
