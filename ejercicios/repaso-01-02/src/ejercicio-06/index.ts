const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function analizarMatriz(matriz: number[][]): {
  suma: number
  maximo: number | null
} {
    let suma: number = 0
    let maximo: number | null = null
    for (const fila of matriz){
      for (const numero of fila){
        suma+=numero
        if (maximo === null || numero > maximo){
          maximo = numero
        }
      }
    }
  return { suma: suma, maximo: maximo }
}

export function ejercicio06(): void {
  console.log(analizarMatriz(matriz))
  console.log(analizarMatriz([]))
  console.log(analizarMatriz([[]]))
  console.log(analizarMatriz([[-5, -2], [-9]]))
}
