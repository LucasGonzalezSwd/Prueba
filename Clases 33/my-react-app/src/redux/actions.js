import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
} from "./actionTypes";

// Acción para obtener todos los productos
export const getProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3000/api/products");
    dispatch({ type: GET_PRODUCTS, payload: response.data });
  };
};

// Acción para obtener los detalles de un producto
export const getProductDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );
    dispatch({ type: GET_PRODUCT_DETAIL, payload: response.data });
  };
};

// Acción para crear un nuevo producto
export const createProduct = (productData) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3000/api/products",
      productData
    );
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
  };
};

// Acción para eliminar un producto
export const deleteProduct = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };
};

// Acción para actualizar un producto
export const updateProduct = (id, updatedData) => {
  return async (dispatch) => {
    const response = await axios.put(
      `http://localhost:3000/api/products/${id}`,
      updatedData
    );
    dispatch({ type: UPDATE_PRODUCT, payload: response.data });
  };
};

export const getProductsByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api//products/${category}`
    );

    // Verificar si data es un array de productos
    const products = Array.isArray(data) ? data : data.products || [];

    // Despachar la acción con los productos obtenidos
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: products,
    });
  } catch (error) {
    console.error(error);
    // Manejo de error
  }
};
