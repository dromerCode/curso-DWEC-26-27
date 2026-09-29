const entradas = ['7', '4.5', '9', '3', '5.5', 'hola']

function mediaNotas(entradas: string[]): {
  validas: number
  media: string | null
} {
  let validas: number = 0
  let media: string | null = null
  let suma: number = 0
  for (const nota of entradas){
    const notaLimpia = nota.trim()
    if (notaLimpia === ''){
      continue
    }

    const numero = Number(notaLimpia)

    if (Number.isFinite(numero) && numero>=0 && numero<=10) {
      validas++
      suma+=numero
    }
  }
  if (validas > 0){
    media = (suma / validas).toFixed(1)
  }    
  return { validas: validas, media: media }
}

export function ejercicio08(): void {
  console.log(mediaNotas(entradas))
  console.log(mediaNotas([]))
  console.log(mediaNotas(['10', '0']))
  console.log(mediaNotas(['11', '-1', 'x']))
}
