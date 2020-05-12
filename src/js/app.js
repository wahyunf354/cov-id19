import "../style/style.css";
import "./component/NavBar.js";
import "./component/SearchCountry.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { globalCasesApi, dailyCovid, countryAPI, newsAPI } from "./api";
import { hendleSelectChange, hendleSelectNotChange } from "./selectContry";

countryAPI();
dailyCovid();
globalCasesApi();
hendleSelectNotChange();
hendleSelectChange();
newsAPI();
