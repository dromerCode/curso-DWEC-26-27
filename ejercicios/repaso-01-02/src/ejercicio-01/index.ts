const lecturas = ['21.5', '19', '', '23.5', 'error', '20']

function analizarLecturas(lecturas: string[]): {
  validas: number
  descartadas: number
  media: string
} 


{
  let validas: number = 0
  let descartadas: number = 0
  let suma: number = 0
  let media: string
  for (const lectura of lecturas) {
    const lecturaLimpio = lectura.trim()
    if (lecturaLimpio === ''){
      descartadas++
      continue
    }

    const numero = Number(lecturaLimpio)

    if (!Number.isFinite(numero)) {
        descartadas++
    } else {
        validas++
        suma+=numero
        console.log(numero >= 22 ? 'Caluroso' : 'Fresco')
      }
  }

  if (validas === 0 ){
    media = "Sin datos"
  } else {
    let resultado = suma/validas
    media = resultado.toFixed(1)
  }

  return { validas: validas, descartadas: descartadas, media: media }
}

export function ejercicio01(): void {
  console.log(analizarLecturas(lecturas))
  console.log(analizarLecturas([]))
  console.log(analizarLecturas(['0']))
}
