import type { Product } from "../../../types/product";

export function soldOutNames(list: Product[]): string[] {
  return list.filter((product => product.stock === 0)).map((product => product.name))
}
