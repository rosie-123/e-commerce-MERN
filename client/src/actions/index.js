import axios from "axios";
import { FETCH_USER, FETCH_PRODUCTS } from "./types";

// action creator
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/products");
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};