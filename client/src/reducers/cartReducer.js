import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/types";

const initStore = {
  products: [],
  productsInCart: {},
  amount: 0,
  price: 0,
};
export default (state = initStore, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload || [] };
    case ADD_TO_CART:
      const item = state.products[action.key];
      if (state.productsInCart.hasOwnProperty(item._id)) {
        state.productsInCart[item._id] += 1;
      } else {
        state.productsInCart[item._id] = 1;
      }
      state.price += item.price;
      return { ...state, amount: state.amount + 1 };
    case REMOVE_FROM_CART:
      const deductAmount = state.productsInCart[action.productInCartId];
      const deleteItem = state.products.find(product => product._id === action.productInCartId);
      const deductPrice = deleteItem.price * deductAmount;
      delete state.productsInCart[action.productInCartId];
      return { ...state, amount: state.amount - deductAmount, price: state.price - deductPrice};
    default:
      return state;
  }
};
