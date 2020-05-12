import "../style/style.css";
import "./component/NavBar.js";
import "./component/SearchCountry.js";
import "./component/Footer.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { globalCasesApi, dailyCovid, countryAPI, newsAPI } from "./api";
import { hendleSelectChange, hendleSelectNotChange } from "./selectContry";
import main from "./main";
import loading from "./loading";

loading();
countryAPI();
dailyCovid();
globalCasesApi();
hendleSelectNotChange();
hendleSelectChange();
newsAPI();
main();
