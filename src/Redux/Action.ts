import { Dispatch } from "redux";

//types
export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
  amount?: number | any;
};

type Rating = {
  rate: number;
};

//ALL Products
export const getAllProducts = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const products = await fetch("https://fakestoreapi.com/products");
      const productsJson = (await products.json()) as Products[];

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

//singleproduct

export const singleproduct = (id: number) => {
  return {
    type: "SINGLE_PRODUCT",
    payLoad: id,
  };
};

//--------------------------------------------------------------------------------------

//Add to cart

export const addToCart = (data: Partial<Products>) => {
  return {
    type: "ADD_TO_CART",
    payLoad: data,
  };
};

//-----------------------------------------------------------------------

//save user
export const saveUser = (data: string | undefined) => {
  return {
    type: "SAVE_USER",
    payLoad: data,
  };
};

//-----------------------------------------------------------------------------------------

//filter
export const getFilter = (data: string) => {
  return {
    type: "FILTER",
    payLoad: data,
  };
};

//--------------------------------------------------------------------------------------------------------

//total price

export const getTotal = (id: number, amt: number) => {
  return {
    type: "TOTAL_PRICE",
    payLoad: id,
    another: amt,
  };
};

//--------------------------------------------------------------------------------------

//all action types

type ALLPRODUCTS = {
  type: "ALL_PRODUCTS";
  payLoad: Products[];
};

type SINGLEPRODUCT = {
  type: "SINGLE_PRODUCT";
  payLoad: number;
};

type ADDTOCART = {
  type: "ADD_TO_CART";
  payLoad: Partial<Products>;
};

type SAVEUSER = {
  type: "SAVE_USER";
  payLoad: string;
};

type GETFILTER = {
  type: "FILTER";
  payLoad: string | undefined;
};

type GETTOTAL = {
  type: "TOTAL_PRICE";
  payLoad: number;
  another: number;
};

export type AllAction =
  | ALLPRODUCTS
  | SINGLEPRODUCT
  | ADDTOCART
  | SAVEUSER
  | GETFILTER
  | GETTOTAL;
