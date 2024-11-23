import { ProductCardType } from './product';

export type CartType = {
  quantity: number;
  package: ProductCardType;
  package_id?: string;
  id?: string;
};
