// src/redux/reducer.js
import {
  GET_All,
  GET_CHARACTER_DETAIL,
  SET_PAGE,
  SET_ORDER,
} from "./actionTypes";

const initialState = {
  characters: [],
  characterDetail: {},
  currentPage: 1,
  itemsPerPage: 10,
  order: "asc", // "asc" for A-Z, "desc" for Z-A
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All:
      const sortedCharacters = action.payload.results.sort((a, b) => {
        if (state.order === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return { ...state, characters: sortedCharacters };

    case GET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };

    case SET_PAGE:
      return { ...state, currentPage: action.payload };

    case SET_ORDER:
      return { ...state, order: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
