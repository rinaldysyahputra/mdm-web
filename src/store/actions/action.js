const axios = require("axios");

const apiUrl = "http://localhost:2203";

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

export const userLogin = (input) => {
  console.log("<<<<<<<<<< login", input);
  return (dispatch) => {
    axios({
      url: apiUrl + `/user/login`,
      method: "POST",
      data: input,
    })
      .then(({ data }) => {
        console.log("<<<<<<<<<< login action", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.current.role);
        dispatch({
          type: "SET_LOGIN",
          payload: {
            data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const userRegister = (input) => {
  console.log("<<<<<<<<<< register", input);
  return (dispatch) => {
    axios({
      url: apiUrl + `/user/register`,
      method: "POST",
      data: input,
    })
      .then(({ data }) => {
        console.log("<<<<<<<<<< register action", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const jobSeekerRegister = (input) => {
  return (dispatch) => {
    axios({
      url: apiUrl + `/job-seeker/registerJobSeeker`,
      method: "POST",
      data: input,
    })
      .then(({ data }) => {
        console.log("<<<<<<<<<< response register action", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUser = () => {
  // console.log("<<<<<<<<<< getUser");
  return (dispatch) => {
    axios({
      url: apiUrl + `/user/getAllUsers`,
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
        console.log("🚀 ~ file: action.js ~ line 70 ~ .then ~ data", data);

        dispatch({
          type: "FETCH_USER",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("<<<< error", err);
      });
  };
};

export const getJobSeeker = () => {
  // console.log("<<<<<<<<<< getUser");
  return (dispatch) => {
    axios({
      url: apiUrl + `/job-seeker/getAllJobSeeker`,
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
      console.log("🚀 ~ file: action.js ~ line 112 ~ .then ~ data", data)
        dispatch({
          type: "FETCH_JOBSEEKER",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("<<<< error", err);
      });
  };
};
