import { addItemToCart } from "./CartUtil";

const initialState = {
  cartItems: [],
  color: "",
  size: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_CART":
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload,
          state.color,
          state.size
        ),
      };
    case "COLOR_SELECTED":
      return {
        ...state,
        color: action.payload,
      };
    case "SIZE_SELECTED":
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};
