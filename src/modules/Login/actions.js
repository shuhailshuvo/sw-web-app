const axios = require("axios");

export const LOGGING_IN = "LOGGING_IN";
export const LOGGED_IN = "LOGGED_IN";

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: LOGGING_IN,
  });

  axios.post("/url", {email, passord})
    .then(response=>{
      dispatch({
        type: LOGGED_IN,
        token: response.data.token
      })
    })
    .catch(e=>{
      dispatch({
        type: LOGGED_IN,
        token: response.data.token
      })
    })
};
