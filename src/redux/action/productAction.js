import { actionType } from "../contant/action-type";

export const setProduct = (products) => {
  console.log("from product action", products);
  return {
    type: actionType.SET_PRODUCT,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: actionType.SELECTED_PRODUCT,
    payload: product,
  };
};
