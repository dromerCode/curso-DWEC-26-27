import type { Product } from "../../../types/product";

export function catalog(list: Product[]): string[] {
  return list
    .toSorted((a, b) => a.category.localeCompare(b.category) || (a.price - b.price))
    .map(product => `${product.category} · ${product.name} · ${product.price} €`)
}
