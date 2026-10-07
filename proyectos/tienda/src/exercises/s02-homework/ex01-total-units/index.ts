import type { Product } from "../../../types/product";

export function totalUnits(list: Product[]): number {
  return list.reduce((acc, product) => acc + product.stock, 0)
}
