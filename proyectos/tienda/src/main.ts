// Enunciado: Creación de una tienda
// Autor: Daniel Romero Cózar
// Investigación:
//
// ------ importaciones ------
import type { Product } from "./types/product";
import { products } from "./data/products";
import { tags } from "./exercises/s01-homework/ex01-tags";
import { soldOutNames } from "./exercises/s01-homework/ex02-sold-out-names";
import { byCategory } from "./exercises/s01-homework/ex03-by-category";
import { priceOf } from "./exercises/s01-homework/ex04-price-of";
import { canBuy } from "./exercises/s01-homework/ex05-can-buy";
import { allInStock } from "./exercises/s01-homework/ex06-think";
import { totalUnits } from "./exercises/s02-homework/ex01-total-units";
import { cheapestAvailable } from "./exercises/s02-homework/ex02-cheapest-available";
import { catalog } from "./exercises/s02-homework/ex03-catalog";
import { summary } from "./exercises/s02-homework/ex04-summary";

// mostrar todos los productos
console.log("Catalogo de productos TechStore", products)

// Mostrar el primer producto
const first: Product | undefined = products[0]
console.log("Primer Producto: ", first)

// mostrar el precio del primer producto

// console.log("Precio del primer producto", products[0].price)

// ----- S01-Homework ------
//Ejercicio 1 tags
console.log('ej01', tags(products))
//Ejercicio 2 0 stock
console.log('ej02', soldOutNames(products))
//Ejercicio 3 Ordenar por categoria
console.log('ej03', byCategory(products, 'audio').map((product) => product.name))
console.log('ej03', byCategory(products, 'monitors').map((product) => product.name))
console.log('ej03', byCategory([], 'audio'))
//Ejercicio 4 Precio por id
console.log('ej04', priceOf(products, 3))
console.log('ej04', priceOf(products, 99))
//Ejercicio 5 Puede comprar
console.log(
  'ej05',
  canBuy(products, 1, 2),  // teclado, hay 5 → true
  canBuy(products, 1, 6),  // teclado, pide 6 y solo hay 5 → false
  canBuy(products, 2, 1),  // ratón agotado → false
  canBuy(products, 99, 1), // no existe → false
  canBuy(products, 1, 0),  // 0 unidades → false
)
//Ejercicio 6 Piensa
console.log('ej06', allInStock([]))


// ------ S02-Homework ------
//Ejercicio 1 Suma stock
console.log('ej01', totalUnits(products), totalUnits([]))
//Ejercicio 2 Comprovar disponibilidad
const cheapest = cheapestAvailable(products)
if (cheapest !== undefined) {
  console.log('ej02', cheapest.name)
}
console.log('ej02', cheapestAvailable([]))
//Ejercicio 3 Catalogo
console.log('ej03', catalog(products))
//Ejercicio 4 Resumen
console.log('ej04', summary(products))
console.log('ej04', summary([]))
//Ejercicio 5 Piensa
