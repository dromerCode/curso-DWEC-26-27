import type { Product } from "../../../types/product";

export function cheapestAvailable(list: Product[]): Product | undefined {
  return list
    .filter(product => product.stock > 0)
    .toSorted((a, b) => a.price - b.price)[0]
}
