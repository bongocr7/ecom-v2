const reducer = (state, action) => {
  if (action.type === "addtocart") {
    return {
      cart: [...state.cart, action.payload],
    };
  }
  return state;
};
