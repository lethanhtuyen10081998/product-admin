import { Product } from 'src/types/product';

export enum ActionsTypes {
  ON_SELECTED_PRODUCT = 'ON_SELECTED_PRODUCT',
}

export type Actions = {
  type: ActionsTypes.ON_SELECTED_PRODUCT;
  payload: Product;
};

export type API = {
  onSelectedProduct: (data: Product) => void;
};

export interface State {
  selectedProducts: Product[];
}

export const initialState: State = {
  selectedProducts: [],
};
