// src/redux/actions.js
import axios from "axios";

import {
  GET_All,
  GET_CHARACTER_DETAIL,
  SET_PAGE,
  SET_ORDER,
} from "./actionTypes";

export const getAll = () => {
  return async function (dispatch) {
    const characters = (
      await axios.get(`https://rickandmortyapi.com/api/character`)
    ).data;
    console.log(characters);
    return dispatch({ type: GET_All, payload: characters });
  };
};

export const getCharacterDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

// Action Creators
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setOrder = (order) => ({
  type: SET_ORDER,
  payload: order,
});
