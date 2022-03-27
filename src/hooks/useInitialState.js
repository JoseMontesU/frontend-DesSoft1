import { useState } from "react";
import axiosInstance from "./axios";

const initialState = {
  cart: [],
  products: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (producto) => {
    setState({
      ...state,
      cart: [...state.cart, producto],
    });
  };

  const updateProductos = () => {
    setState({
      ...state,
      products: productoList(),
    });
  };

  const productoList = async () => {
    const res = await axiosInstance.get("productos/producto-list/");
    return res.data;
  };

  return { state, addToCart, updateProductos };
};

export default useInitialState;
