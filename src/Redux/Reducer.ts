import { Products, AllAction } from "./Action";

//types
export type InitialState = {
  products: Products[] | [];
  product: Products | any;
  cart: Products | [];
};

const initialState: InitialState = {
  products: [],
  product: {},
  cart: [],
};

export const reducer = (
  state = initialState,
  action: AllAction
): InitialState => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return {
        ...state,
        products: action.payLoad,
      };
    case "SINGLE_PRODUCT": {
      const id = action.payLoad;
      return {
        ...state,
        product: state.products.filter((e) => e.id === id)[0],
      };
    }

    default:
      return state;
  }
};
