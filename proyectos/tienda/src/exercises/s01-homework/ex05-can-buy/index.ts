import type { Product } from "../../../types/product";

export function canBuy(list: Product[], id: number, quantity: number): boolean {
  const product = list.find(product => product.id === id)
  if (product === undefined) {
    return false
  }
  return quantity > 0 && product.stock >= quantity
}
