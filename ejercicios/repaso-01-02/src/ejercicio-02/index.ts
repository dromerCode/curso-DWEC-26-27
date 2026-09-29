const numeros = [7, 12, 0, -3, 8, 15, 4]

function contarPorParidad(numeros: number[]): {
  pares: number
  impares: number
}

{
  let pares: number = 0
  let impares: number = 0
  for (const numero of numeros){
    (numero % 2 === 0) ? pares++ : impares++
  }
  return { pares: pares, impares: impares }
}

export function ejercicio02(): void {
  console.log(contarPorParidad(numeros))
  console.log(contarPorParidad([]))
  console.log(contarPorParidad([0]))
  console.log(contarPorParidad([-4]))
  console.log(contarPorParidad([-3]))
}
