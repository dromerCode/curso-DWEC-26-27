//funcion fabrica que genera saludas
//
//
function makeGreeter(greeting: string): (name: string) => string {
  return (name) => `${greeting} - ${name}`

}

const morning = makeGreeter("Buenos dias")
const evening = makeGreeter("Buenas noches")

console.log(['Ana', 'Luis', 'Pepe'].map(morning))


//conversor de diferentes unidades
//
function makeConverter(factor: number): (value: number) => number {
  return (value) => value * factor
}

const kmToMiles = makeConverter(0.621)
const eurosToDollars = makeConverter(1.08)

console.log(kmToMiles(10).toFixed(2))
console.log(eurosToDollars(100).toFixed(2))

//Crear un marcador de cualquier competcion
//

function makeScoreBoard(): { scoreHome: () => void; scoreAway: () => void; result: () => string } {
  let home: number = 0
  let away: number = 0

  return {
    scoreHome: () => { home += 1 },
    scoreAway: () => { away += 1 },
    result: () => `${home} -- ${away}`
  }
}

const granadaToMalaga = makeScoreBoard()
const finalCamp = makeScoreBoard()

granadaToMalaga.scoreHome()
