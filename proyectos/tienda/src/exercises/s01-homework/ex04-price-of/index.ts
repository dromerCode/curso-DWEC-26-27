import type { Product } from "../../../types/product";

/**
 *  Recibe dos parámetros y busca el producto en la lista por el id y si encuentra el objeto existe
 * @param list Descripción
 * @param id Descripción
 * @returns Descripción
 */
export function priceOf(list: Product[], id: number): number | null {
  const product: Product | undefined = list.find(product => product.id === id)
  if (product === undefined) {
    return null
  }
  return product.price
}

// Pregunta, Por qué no es buena idea devolver 0 cuando el producto no existe?
// Respuesta: Se podria decir que el producto más bien es gratis, en lugar de indicar que no existe, asi los distinguimos y con null sabemos que no existe
