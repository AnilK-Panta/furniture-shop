import { combineReducers } from "redux";
import { selectedProduct, setProduct } from "../action/productAction";

export const reducers = combineReducers({
  allProducts: setProduct,
  product: selectedProduct,
});
