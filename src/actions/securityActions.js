import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post(`/users/register`, newUser);
    history.push(`/login`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const login = (LoginRequest) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", LoginRequest); // post => Login Request
    const { token } = res.data; // extract token from res.data
    localStorage.setItem("jwtToken", token); // store the token in the localStorage
    setJWTToken(token); // set our token in header ***
    const decoded = jwt_decode(token); // decode token on React
    
    dispatch({ // dispatch to our securityReducer
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
