import Product from "../Components/Product";
import { Products, AllAction } from "./Action";

//types
export type InitialState = {
  products: Products[] | [];
  product: Products | {};
  cart: Products | any;
  user: string | undefined;
  filtered: Products[] | [];
};

const initialState: InitialState = {
  products: [],
  product: {},
  cart: [],
  user: "",
  filtered: [],
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
    case "SAVE_USER": {
      return {
        ...state,
        user: action.payLoad,
      };
    }
    case "FILTER": {
      const data = action.payLoad as string;
      const filteredProducts = state.products.filter((e: Products) =>
        e.category.includes(data)
      );

      console.log({ filteredProducts });
      return {
        ...state,
        filtered:
          data === "men" ? filteredProducts.slice(0, 4) : filteredProducts,
      };
    }

    default:
      return state;
  }
};
