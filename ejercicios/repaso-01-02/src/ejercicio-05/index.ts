const casos: Array<[number, number]> = [
  [80, 25],
  [0, 20],
  [80, 100],
  [-1, 10],
  [80, 120],
  [NaN, 10],
  [50, 0]
]

function precioFinal(precio: number, descuento: number): number | null {
  if (!Number.isFinite(precio) || !Number.isFinite(descuento) || precio<0 || descuento<0 || descuento>100){
    return null
  }
  return precio * (1 - descuento / 100)
}


export function ejercicio05(): void {
  for (const caso of casos){
    const [precio, descuento] = caso
    const resultado = precioFinal(precio, descuento)
    console.log(resultado === null ? 'Datos inválidos' : resultado)
  }
}
