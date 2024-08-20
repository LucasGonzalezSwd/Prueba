// src/redux/actions.js
import axios from "axios";

import { GET_All, GET_CHARACTER_DETAIL, ORDER_CHARACTERS } from "./actionTypes";

// const URL = process.env.REACT_APP_URL;

export const getAll = () => {
  return async function (dispatch) {
    const characters = (
      await axios.get(`https://rickandmortyapi.com/api/character`)
    ).data;
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

export const orderCharacters = (order) => {
  return {
    type: ORDER_CHARACTERS,
    payload: order, // Puede ser 'asc' o 'desc'
  };
};
