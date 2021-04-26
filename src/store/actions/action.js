const axios = require("axios");

const apiUrl = "";

export const userLogout = () => {
  return {
    type: "SET_LOGOUT",
  };
};

export const setLogin = (data) => {
  return {
    type: "SET_LOGIN",
    payload: data,
  };
};

export const setCompany = (data) => {
  return {
    type: "SET_COMPANY",
    payload: data,
  };
};