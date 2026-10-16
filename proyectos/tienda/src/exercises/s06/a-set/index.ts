// Bloque A · Set: sin repetidos y «¿está?»

// A1 · Etiquetas del blog (básico)
// uniqueTags(posts: string[][]): string[]
// Todas las etiquetas una sola vez, en el orden en que aparecen por primera vez.
// uniqueTags([['ts', 'js'], ['js', 'css'], ['ts']]) // ['ts', 'js', 'css']
export function uniqueTags(posts: string[][]): string[] {
  return [...new Set<string>(posts.flat())]
}

// A2 · Votación (medio)
// firstRepeated(votes: string[]): string | undefined
// El primer DNI que aparece por segunda vez, o undefined si nadie repite.
// firstRepeated(['11A', '22B', '33C', '22B', '11A']) // '22B'
// firstRepeated(['11A'])                             // undefined
export function firstRepeated(votes: string[]): string | undefined {
  const set = new Set<string>()
  for (const vote of votes) {
    if (set.has(vote)) return vote
    set.add(vote)
  }
  return undefined
}

// A3 · Canciones en las dos playlists (reto)
// inBoth(a: string[], b: string[]): string[]
// Canciones que están en las dos listas, sin repetir, en el orden de a.
// inBoth(['Flowers', 'Despechá', 'Flowers', 'Anti-Hero'], ['Anti-Hero', 'Flowers', 'Tusa'])
// // ['Flowers', 'Anti-Hero']
export function inBoth(a: string[], b: string[]): string[] {
  const set = new Set<string>(b)
  const common = new Set<string>()
  for (const song of a) {
    if (set.has(song)) {
      common.add(song)
    }
  }
  return [...common]
}
