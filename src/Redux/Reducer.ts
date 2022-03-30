import { Products, AllAction } from "./Action";

//types
export type InitialState = {
  products: Products[] | [];
};

const initialState: InitialState = {
  products: [],
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

    default:
      return state;
  }
};
