import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [state, setState] = useState({
    products: [],
    cart: [],
  });

  const getAllProduct = (payload) => {
    setState({
      ...state,
      products: payload,
    });
  };

  const handleAddCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const handleRemoveCart = (payload) => {
    setState({
      ...state,
      cart: payload,
    });
  };

  return (
    <ProductContext.Provider
      value={{ state, getAllProduct, handleAddCart, handleRemoveCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
