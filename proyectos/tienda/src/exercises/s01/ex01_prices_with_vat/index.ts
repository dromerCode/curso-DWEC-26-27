// Enunciado: Descripción del ejercicio
// Autor: Daniel Romero Cózar
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

// Recibe una lista de productos y devolver una lista de numeros con el precio incluuyendo el iva

const VAT = 0.21;

export function pricesWithVat(myProducts: Product[]): number[] {

  return myProducts.map(product => Math.round(product.price * (1 + VAT)))

}
