// Bloque B · Map: «para cada X, su Y»

// B1 · Goles por jugador (básico)
// goalsByPlayer(goals: string[]): Map<string, number>
// goalsByPlayer(['Lamine', 'Pedri', 'Lamine', 'Ferran', 'Lamine', 'Pedri'])
// // Map { 'Lamine' => 3, 'Pedri' => 2, 'Ferran' => 1 }


// B2 · Máximo goleador (medio)
// topScorer(count: ReadonlyMap<string, number>): string | undefined
// topScorer(goalsByPlayer([...])) // 'Lamine'
// topScorer(new Map())            // undefined


// B3 · Libros por autor (medio)
// interface Book { title, author }
// titlesByAuthor(books: Book[]): Map<string, string[]>
// // Map { 'García Márquez' => ['Cien años de soledad', 'El amor en los tiempos del cólera'],
// //       'Cortázar' => ['Rayuela'] }


// B4 · Capitales (reto)
// capitalOf(capitals: ReadonlyMap<string, string>, country: string): string
// 'La capital de X es Y' o 'No conozco X' (sin usar !)
// const capitals = new Map([['Francia', 'París'], ['Italia', 'Roma']])
// capitalOf(capitals, 'Italia') // 'La capital de Italia es Roma'
// capitalOf(capitals, 'Narnia') // 'No conozco Narnia'

