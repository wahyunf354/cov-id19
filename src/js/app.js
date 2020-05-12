import "../style/style.css";
import "./component/NavBar.js";
import "./component/SearchCountry.js";
import { globalCasesApi, dailyCovid, countryAPI } from "./api";
import { hendleSelectChange, hendleSelectNotChange } from "./selectContry";

countryAPI();
dailyCovid();
globalCasesApi();
hendleSelectNotChange();
hendleSelectChange();
