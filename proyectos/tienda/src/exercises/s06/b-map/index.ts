// Bloque B · Map: «para cada X, su Y»

// B1 · Goles por jugador (básico)
// goalsByPlayer(goals: string[]): Map<string, number>
// goalsByPlayer(['Lamine', 'Pedri', 'Lamine', 'Ferran', 'Lamine', 'Pedri'])
// // Map { 'Lamine' => 3, 'Pedri' => 2, 'Ferran' => 1 }
export function goalsByPlayer(goals: string[]): Map<string, number> {
  const count = new Map<string, number>()
  for (const goal of goals) {
    count.set(goal, (count.get(goal) ?? 0) + 1)
  }
  return count
}

// B2 · Máximo goleador (medio)
// topScorer(count: ReadonlyMap<string, number>): string | undefined
// topScorer(goalsByPlayer([...])) // 'Lamine'
// topScorer(new Map())            // undefined
export function topScorer(count: ReadonlyMap<string, number>): string | undefined {
  let topPlayer: string | undefined
  let topScore: number = 0
  for (const [player, goals] of count) {
    if (goals > topScore) {
      topScore = goals
      topPlayer = player
    }
  }
  return topPlayer
}

// B3 · Libros por autor (medio)
// interface Book { title, author }
// titlesByAuthor(books: Book[]): Map<string, string[]>
// // Map { 'García Márquez' => ['Cien años de soledad', 'El amor en los tiempos del cólera'],
// //       'Cortázar' => ['Rayuela'] }
interface Book {
  title: string
  author: string
}

export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const authors = new Map<string, string[]>()
  for (const book of books) {
    const current = authors.get(book.author) ?? []
    authors.set(book.author, [...current, book.title])
  }
  return authors
}

// B4 · Capitales (reto)
// capitalOf(capitals: ReadonlyMap<string, string>, country: string): string
// 'La capital de X es Y' o 'No conozco X' (sin usar !)
// const capitals = new Map([['Francia', 'París'], ['Italia', 'Roma']])
// capitalOf(capitals, 'Italia') // 'La capital de Italia es Roma'
// capitalOf(capitals, 'Narnia') // 'No conozco Narnia'
export function capitalOf(capitals: ReadonlyMap<string, string>, country: string): string {
  const capital = capitals.get(country)
  if (capital === undefined) return `La capital de ${country} es ${capital}`
  return `No conozco ${country}`
}
