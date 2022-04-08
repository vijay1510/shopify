import { Products, AllAction } from "./Action";

//types
export type InitialState = {
  products: Products[] | [];
  product: Products | {};
  cart: Products | any;
  user: string | undefined;
  filtered: Products[] | [];
  amount: any;
};

const initialState: InitialState = {
  products: [],
  product: {},
  cart: [],
  user: "",
  filtered: [],
  amount: [],
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
      const isAvailable = state.cart.find(
        (e: Products) => e.id === isInCart.id
      );

      if (isAvailable === undefined) {
        return {
          ...state,
          cart: [...state.cart, isInCart],
          amount: [...state.amount, { ...isInCart, amount: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((e: Products) => e.id !== isAvailable.id),
          amount: state.cart.filter((e: Products) => e.id !== isAvailable.id),
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

      return {
        ...state,
        filtered:
          data === "men" ? filteredProducts.slice(0, 4) : filteredProducts,
      };
    }
    case "TOTAL_PRICE": {
      const id = action.payLoad;
      const amount = action.another;
      let newCart = [...state.amount];

      const index = newCart.findIndex((e: Products) => e.id === id);
      newCart[index] = { ...newCart[index], amount: amount };

      return {
        ...state,
        amount: newCart,
      };
    }

    default:
      return state;
  }
};
