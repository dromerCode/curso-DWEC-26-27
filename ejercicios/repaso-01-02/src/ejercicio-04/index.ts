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

function buscarProducto(catalogo: Producto[], id: number): Producto | null {
  const buscado = catalogo.find(producto => producto.id === id) 
  if (buscado === undefined){
    return null
  }
  return buscado
}

export function ejercicio04(): void {
  const monitor = buscarProducto(productos, 3)
  const inexistente = buscarProducto(productos, 99)
  const enVacio = buscarProducto([], 3)


  if (monitor === null) {
    console.log('Producto no encontrado')
  } else {
    console.log(monitor.nombre, monitor.precio)
  }
  if (inexistente === null) {
    console.log('Producto no encontrado')
  } else {
    console.log(inexistente.nombre, inexistente.precio)
  }
  if (enVacio === null) {
    console.log('Producto no encontrado')
  } else {
    console.log(enVacio.nombre, enVacio.precio)
  }
}
