import type { Product } from "../../../types/product";

export interface Summary {
  products: number;
  units: number;
  value: number;
}

export function summary(list: Product[]): Summary {
  return list
    .reduce((acc, p) => ({
      products: acc.products + 1,
      units: acc.units + p.stock,
      value: acc.value + (p.price * p.stock)
    }),
      { products: 0, units: 0, value: 0 })
}
