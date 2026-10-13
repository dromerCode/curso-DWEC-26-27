import type { Cart } from "../../types/cart";
import type { Product } from "../../types/product";

/**
 * Añade una unidad de un producto al carrito
 * @param cart carrito actual
 * @param productId id del producto a añadir
 * @returns carrito nuevo: si ya estaba, suma 1; si no, añade una línea con 1
 */
export function addToCart(cart: Cart, productId: number): Cart {
  const exists = cart.some(line => line.productId === productId)
  if (exists) {
    return cart.map(line => line.productId === productId ? { ...line, quantity: line.quantity + 1 } : line)
  }
  return [...cart, { productId, quantity: 1 }]
}

/**
 * Quita un producto del carrito (la línea entera)
 * @param cart carrito actual
 * @param productId id del producto a quitar
 */
export function removeFromCart(cart: Cart, productId: number): Cart {
  return cart.filter(line => line.productId !== productId)
}

/**
 * Calcula el total del carrito buscando el precio de cada producto
 * @param cart carrito
 * @param list catálogo de productos (de ahí sacamos los precios)
 */
export function cartTotal(cart: Cart, list: Product[]): number {
  return cart.reduce((total, line) => {
    const product = list.find(p => p.id === line.productId)
    return product === undefined ? total : total + product.price * line.quantity
  }, 0)
}
