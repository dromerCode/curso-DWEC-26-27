import type { Product } from "../../../types/product";
/**
 *  Recibe una lista, un id, y la cantidad solicitada y busca el id del producto y mira la cantidad solicitada y si hay suficiente stock
 * @param list Descripción
 * @param id Descripción
 * @param quantity Descripción
 * @returns Descripción
 */
export function canBuy(list: Product[], id: number, quantity: number): boolean {
  const product = list.find(product => product.id === id)
  if (product === undefined) {
    return false
  }
  return quantity > 0 && product.stock >= quantity
}
