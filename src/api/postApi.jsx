import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});
// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/countries");
};

// HTTP GET METHOD fro the indvi. country name
export const getCountryDataIndv = (alpha3Code) => {
  return api.get(`/alpha/${alpha3Code}`);
};
