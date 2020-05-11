import $ from "jquery";
import formatNumber from "./tools/numberFormat.js";
import moment from "moment";

const display = () => {
  moment.locale("id");
  $(".data-global .date").text(
    "Last Update:  " + moment().format("MMMM Do YYYY, h:mm:ss")
  );
};

const updateTime = () => {
  display();
  setTimeout(() => {
    updateTime();
  }, 1000);
};

const globalCases = (data) => {
  updateTime();
  $(".ifected-data").append(formatNumber(data.confirmed.value));
  $(".died-data").append(formatNumber(data.deaths.value));
  $(".recover-data").append(formatNumber(data.recovered.value));
};

export default globalCases;
