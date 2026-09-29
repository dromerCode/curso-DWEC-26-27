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

function etiquetasDisponibles(catalogo: Producto[]): string[] {
  const noRebajados = catalogo.filter(producto => !producto.rebajado)
  const etiquetas = noRebajados.map(producto => `${producto.id} · ${producto.nombre} · ${producto.precio} €`)
  return etiquetas
}

// ¿Por qué map por sí solo no sirve para quedarte con los no rebajados?
// Tu explicación:
// Porque el map decide que sale en cada posición, pero no puede decidir que no salga nada, a diferencia de filtrer, que puede decidir que elemento se queda y cual no, asi que el resultado puede tener menos elementos

export function ejercicio07(): void {
  console.log(etiquetasDisponibles(productos))
  console.log(etiquetasDisponibles([]))
}
