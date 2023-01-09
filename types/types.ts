import { Decimal } from 'decimal.js';

export type DBProduct = {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  category_id: number | null;
  price?: Decimal | null;
};

export type Product = {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  category_id: number | null;
  price?: string | null;
};
