import { actionType } from "../contant/action-type";

const initialState = {
  products: [
    {
      id: 1,
      name: "anil",
      discreption: "hello my name is anil",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
