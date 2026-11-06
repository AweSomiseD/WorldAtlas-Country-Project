import axios from "axios";

const api = axios.create({
  baseURL: "https://countries.dev",
});

// Get all countries
export const getCountryData = () => {
  return api.get("/countries");
};

// Get individual country by alpha3Code
export const getCountryDataIndv = (alpha3Code) => {
  return api.get(`/alpha/${alpha3Code}`);
};
