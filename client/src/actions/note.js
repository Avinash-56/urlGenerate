import { ADD_NOTE, GET_URL, CLEAR_AREA } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getNote = (url) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ url });
  try {
    const res = await axios.post("/api/note", body, config);
    dispatch({
      type: GET_URL,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const generateUrl = (note) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ note });
  try {
    const res = await axios.post("/api/note/url", body, config);
    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const clearArea = () => async (dispatch) => {
  dispatch({
    type: CLEAR_AREA,
  });
};
