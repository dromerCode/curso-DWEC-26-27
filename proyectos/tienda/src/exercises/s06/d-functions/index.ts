// Bloque D · Funciones que reciben y devuelven funciones

export type PriceRule = (price: number) => number

// D1 · Aplicar una regla a todos los precios (básico)
// addVat: PriceRule  → price * 1.21
// applyToAll(prices: number[], rule: PriceRule): number[]
// applyToAll([10, 100], addVat) // [12.1, 121]


// D2 · Fábrica de descuentos (medio)
// createDiscount(percent: number): PriceRule
// applyToAll([50, 20], createDiscount(10)) // [45, 18]
// createDiscount(50)(80)                   // 40


// D3 · Ordenar películas (reto)
// interface Movie { title, year, rating }
// type MovieOrder = (a: Movie, b: Movie) => number
// byYear (más antigua → más nueva), byRatingDesc (mayor → menor nota)
// sortMovies(movies: readonly Movie[], order: MovieOrder): string[]  (sin modificar la original)
// const movies = [
//   { title: 'Coco', year: 2017, rating: 8.4 },
//   { title: 'Up', year: 2009, rating: 8.3 },
//   { title: 'Soul', year: 2020, rating: 8.0 },
// ]
// sortMovies(movies, byYear)       // ['Up', 'Coco', 'Soul']
// sortMovies(movies, byRatingDesc) // ['Coco', 'Up', 'Soul']
// movies[0].title                  // 'Coco' ← la original no cambia

