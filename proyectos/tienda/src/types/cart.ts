// Una línea del carrito: qué producto (por su id) y cuántas unidades
export interface CartLine {
  productId: number;
  quantity: number;
}

// El carrito no es más que un array de líneas
export type Cart = CartLine[]
