type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function rebajar(catalogo: Producto[], id: number): Producto[] {
  const catalogoMap = catalogo.map(producto => producto.id === id ? { ...producto, rebajado: true, precio: Number((producto.precio * 0.9).toFixed(2))} : producto)
  return catalogoMap
}

// ¿Qué se ha copiado y qué se sigue compartiendo entre el original y el resultado?
// Tu explicación:
// Es un array nuevo, los objetos que hemos editado son completamente nuevos pero los otros se comparten entre ambos
// en este caso monitor es nuevo pero teclado es el mismo objeto, por lo que si lo modifico en un lado afecta al otro

export function ejercicio09(): void {
  const rebajados = rebajar(productos, 3)
  console.log(rebajados[2])  // monitor en el resultado: 162, rebajado: true
  console.log(productos[2])  // monitor en el original: 180, rebajado: false

  const sinCambios = rebajar(productos, 99)
  console.log(sinCambios)    // todos igual que en productos
}
