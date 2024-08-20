import { GET_All, GET_CHARACTER_DETAIL, ORDER_CHARACTERS } from "./actionTypes";

const initialState = {
  characters: [],
  characterDetail: {},
  characterDetail2: {},
  soloEpisodios: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All:
      return { ...state, characters: action.payload };

    case GET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };

    case ORDER_CHARACTERS:
      const sortedCharacters = [...state.characters]; // Clonamos el array para no mutarlo
      if (action.payload === "asc") {
        sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "desc") {
        sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, characters: sortedCharacters };

    default:
      return { ...state };
  }
};

export default rootReducer;
