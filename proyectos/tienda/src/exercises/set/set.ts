import { products } from "../../data/products";

products.map(p => p.category) //aqui me mostrarán las categorias pero seguramente habrá repetidas categorias

//solucion : usar un set para tener valores unicos
//
//no usa posiciones
//
//como se declara: new Set<tipo>()
const tags = new Set<string>()
//como se añade

tags.add("Ciencia Ficcion")
tags.add("Terror")

//como se ve el tamaño del set
tags.size

//comoo se si un elemento esta dentro del set
tags.has("Terror") //true muy rapido

//como se borra
tags.delete("Terrorrr") // false porque no exsite y por tanto no borra

const categoriasNoRepetidas = new Set<string>(products.map(p => p.category))
console.log(categoriasNoRepetidas)

// Crear una funcion que le pase como parametro un array de numeros y me devuelva true o false si hay repetidos
//
export function hasDuplicates(ids: number[]): boolean {
  return new Set(ids).size !== ids.length
}

hasDuplicates([2, 3, 23, 2, 4, 32, 3]) //true

//Ejemplificamos con un set una ista de peliculas ya vistas 
//crear una funcion que llamaremos firstView que reciba un array de ids de peliculas y que devuekvs un number o undefined con lo primero pelicula repetida o que se ha visto mas de una vez
export function firstView(ids: number[]): number | undefined {
  const see = new Set<number>()
  for (const id of ids) {
    if (see.has(id)) return id
    see.add(id)
  }
  return undefined
}



firstView([2, 3, 4, 2, 1, 2, 3, 3])
