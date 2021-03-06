export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItme) => basketItme.id === action.id
      );
      const newBasket = state.basket;
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove item");
      }
      return { state, basket: newBasket };
    default:
      return state;
  }
};
