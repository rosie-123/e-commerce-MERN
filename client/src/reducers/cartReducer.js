import { FETCH_PRODUCTS, ADD_TO_CART } from "../actions/types";

const initStore = {
  products: [],
  productsInCart: [],
  amount: 0,
  price: 0,
}
export default (state = initStore, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, products: action.payload || []}
    case ADD_TO_CART:

    default:
      return state;
  }
};
