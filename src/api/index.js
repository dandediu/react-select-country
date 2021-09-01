import axios from "axios";

export default axios.create({
  baseURL: "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;languages",
});