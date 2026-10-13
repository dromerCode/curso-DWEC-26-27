// Crear una funcion que permite abrir productos a mi Data
//  Restricciones

import type { Product } from "../../types/product";

// const copy = [...products]
const original = { name: 'teclado', price: 80 }
const other = original // <--- asi no debo de crear una copia porque la copia puede mutar el objeto original
other.price = 0
console.log(original.price) // 0 -> se ha cambiado el original también

export type NewProduct = Omit<Product, 'id'> // un utility type
//crea un nuevo tipo igual que product pero sin id

//crea una funcion que me actualice el precio de los productos, le paso id y el nuevo precio
export function updatePrice(list: Product[], id: number, price: number): Product[] {
  return list.map(product => product.id === id ? { ...product, price } : product)
}

//actualizaciones parciales
export type ProductChange = Partial<Omit<Product, 'id'>>
// se lee de dentro hacia fuera, quita el id de product y lo que queda hazlo opcional; con esto me aseguro que no voy a cambiar nunca el id

export const updateProduct = (list: Product[], id: number, changes: ProductChange): Product[] => {
  return list.map(p => p.id === id ? { ...p, ...changes } : p)
}
// updateProduct(products, 1, { stock: 10, name: 'Teclado Gaming' })

export function deleteProduct(list: Product[], id: number): Product[] {
  return list.filter(p => p.id !== id)
}

// ejercicio
//
// 1. Crear un type llamado CartLine que tenga el id del producto y la cantidad a comprar
// recuerda exportarlo  -> src/types/cart.ts
//
// añadir elementos al carrito   -> addToCart en ejemplo_carrito.ts
// borrar elementos del carrito  -> removeFromCart
// obtener el total del carrito  -> cartTotal
