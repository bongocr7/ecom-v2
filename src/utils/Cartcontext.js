import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./Auth";

const cartContext = createContext();

const reducer = (state, action) => {
  if (action.type === "addtocart") {
    return {
      cart: [...state.cart, action.payload],
    };
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const auth = useAuth();

  const getLocalCart = () => {
    const obj = JSON.parse(localStorage.getItem(auth.user.Username));
    return obj.Cart;
  };

  const initialState = {
    cart: getLocalCart(),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "addtocart", payload: item });
  };

  useEffect(() => {
    const user = {
      Username: auth.user.Username,
      MobileNumber: auth.user.mobilenumber,
      Cart: state.cart,
      Orders: auth.user.Orders,
    };

    localStorage.setItem(auth.user.Username, JSON.stringify(user));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(cartContext);
};
