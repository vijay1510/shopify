import { Dispatch } from "redux";

//types
export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

//ALL Products
export const getAllProducts = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const products = await fetch("https://fakestoreapi.com/products");
      const productsJson = (await products.json()) as Products[];
      console.log({ productsJson });
      dispatch(allProducts(productsJson));
    } catch (error) {
      console.log(error);
    }
  };
};

export const allProducts = (data: Products[]) => {
  return {
    type: "ALL_PRODUCTS",
    payLoad: data,
  };
};

//-----------------------------------------------
//all action types

type ALLPRODUCTS = {
  type: "ALL_PRODUCTS";
  payLoad: Products[];
};

export type AllAction = ALLPRODUCTS;
