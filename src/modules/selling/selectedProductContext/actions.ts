import { Product } from 'src/types/product';

export enum ActionsTypes {
  ON_SELECTED_PRODUCT = 'ON_SELECTED_PRODUCT',
  ON_UPDATE_QUANTITY = 'ON_UPDATE_QUANTITY',
  ON_REMOVE_PRODUCT = 'ON_REMOVE_PRODUCT',
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
    }
  | {
      type: ActionsTypes.ON_REMOVE_PRODUCT;
      payload: {
        id: string;
      };
    };

export type API = {
  onSelectedProduct: (data: Product) => void;
  onUpdateQuantity: (data: { id: string; amount: number }) => void;
  onRemoveProduct: (data: { id: string }) => void;
};

export interface State {
  selectedProducts: Product[];
}

export const initialState: State = {
  selectedProducts: [],
};
