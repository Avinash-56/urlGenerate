import { ADD_NOTE, GET_URL, CLEAR_AREA } from "../actions/types";

const initialState = {
  response: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE:
      return {
        ...state,
        response: payload,
      };
    case GET_URL:
      return {
        ...state,
        response: payload,
      };
    case CLEAR_AREA:
      return {
        ...state,
        response: "",
      };
    default:
      return state;
  }
};
