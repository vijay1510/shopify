import Product from "../Components/Product";
import { Products, AllAction } from "./Action";

//types
export type InitialState = {
  products: Products[] | [];
  product: Products | {};
  cart: Products | any;
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
        product: state.products.filter((e) => e.id === id)[0] as Products,
      };
    }
    case "ADD_TO_CART": {
      const isInCart = action.payLoad;
      console.log(isInCart);
      const isAvailable = state.cart.find(
        (e: Products) => e.id === isInCart.id
      );
      console.log(isAvailable);
      if (isAvailable === undefined) {
        return {
          ...state,
          cart: [...state.cart, isInCart],
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((e: Products) => e.id !== isAvailable.id),
        };
      }
    }

    default:
      return state;
  }
};
