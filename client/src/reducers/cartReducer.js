import { FETCH_PRODUCTS, ADD_TO_CART } from "../actions/types";

const initStore = {
  products: [],
  productsInCart: {},
  amount: 0,
  price: 0,
}
export default (state = initStore, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, products: action.payload || []}
    case ADD_TO_CART:
      const item = state.products[action.key];
      if (state.productsInCart.hasOwnProperty(item._id)) {
        state.productsInCart[item._id] += 1;
      } else {
        state.productsInCart[item._id] = 1;
      }
      state.price += item.price;
      return {...state, amount: state.amount + 1}
    default:
      return state;
  }
};
