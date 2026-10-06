import type { Category, Product } from "../../../types/product";

export function byCategory(list: Product[], category: Category): Product[] {
  return list.filter(product => product.category === category)
}

// Pregunta, qué devuelve byCategory([], 'audio')?
// Resultado: Como es un array vacio filter no puede comparar con nada, simplemente devuelve un array vacio
// ¿Da error o devuelve algo con sentido? ¿Por qué? 
// Resultado: No da error, simplemente pasa todo
