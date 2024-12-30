import { Product } from 'src/types/product';

export enum ActionsTypes {
  ON_SELECTED_PRODUCT = 'ON_SELECTED_PRODUCT',
  ON_UPDATE_QUANTITY = 'ON_UPDATE_QUANTITY',
}

export type Actions =
  | {
      type: ActionsTypes.ON_SELECTED_PRODUCT;
      payload: Product;
    }
  | {
      type: ActionsTypes.ON_UPDATE_QUANTITY;
      payload: {
        id: string;
        amount: number;
      };
    };

export type API = {
  onSelectedProduct: (data: Product) => void;
  onUpdateQuantity: (data: { id: string; amount: number }) => void;
};

export interface State {
  selectedProducts: Product[];
}

export const initialState: State = {
  selectedProducts: [],
};
