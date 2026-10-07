import type { Product } from "../../../types/product";

export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0)

// Pregunta 1 · ¿Qué devuelve allInStock([])?
// Resultado: Devuelve un true
// Pregunta 2 · ¿Es una respuesta razonable para una tienda sin productos? ¿Por qué?
// Respuesta: No, por que no hay productos para decir si hay stock o no
// Pregunta 3 · ¿Cómo cambiarías la función para que una tienda vacía devuelva false?
// Respuesta (escribe el código en una línea): export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0) && list.length > 0

