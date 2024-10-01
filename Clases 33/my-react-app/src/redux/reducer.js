import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
} from "./actionTypes";

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    case GET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };

    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload, // Guardar los productos filtrados por categoría
      };

    default:
      return state;
  }
};

export default rootReducer;
