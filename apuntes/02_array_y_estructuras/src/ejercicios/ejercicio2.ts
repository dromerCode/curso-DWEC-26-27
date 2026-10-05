// Enunciado: Funciones sobre un array de notas: mostrarlas, calcular la media,
//            la mayor nota y su posición, la mediana, añadir una nota y eliminar
//            la primera o la última, sin mutar nunca el array original.
// Autor: Daniel Romero
// Investigación: Apuntes de clase (ejercicio1.ts): spread, push/pop/shift, sort, forEach
//
const notas: number[] = [2, 2, 4, 3, 4]


// funcion que muestre todas las notas
/**
 * Muestra por consola todas las notas pasadas como parámetro.
 * @param notes Array de notas a mostrar
 */
function showNotes(notes: number[]) {
  // console.log(notes)
  // note.foreach((note:number) => console.log(" ", note))
  console.log([...notes])
}

// funcion que calcule la media de las notas
/**
 * Calcula la media de las notas y la muestra por consola.
 * @param notes Array de notas
 */
function calculateAverage(notes: number[]) {
  let sum: number = 0
  notes.forEach((note: number) => sum += note)
  console.log(sum / notes.length)
}

// funcion que muestra la mayor nota y la posicion de esa nota
/**
 * Muestra por consola la mayor nota y su posición en el array.
 * Si la mayor nota se repite, muestra la primera posición en la que aparece.
 * @param notes Array de notas
 */
function bestNote(notes: number[]) {
  let best: number = 0
  let position: number = 0
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] > best) {
      best = notes[i]
      position = i
    }
  }
  console.log("La mayor nota es: ", best, " en la posición ", position)

}
// funcion que calcule la mediana de las notas
/**
 * Calcula la mediana de las notas sin mutar el array original.
 * Si hay un número impar de notas devuelve la del medio; si es par, la media de las dos centrales.
 * @param notes Array de notas
 * @returns La mediana de las notas
 */
function calculateMedian(notes: number[]): number {
  const sortedNotes: number[] = [...notes].sort()
  if (sortedNotes.length % 2 === 1) {
    return sortedNotes[(sortedNotes.length - 1) / 2]
  } else {
    return (sortedNotes[sortedNotes.length / 2 - 1] + sortedNotes[sortedNotes.length / 2]) / 2
  }
}

// funcion que devuelva un array con notas junto con la nota pasada como prarametro
/**
 * Añade una nota al final de una copia del array, sin mutar el original.
 * @param notes Array de notas original
 * @param grade Nota que se añade
 * @returns Una copia del array con la nueva nota al final
 */
function addGrade(notes: number[], grade: number): number[] {
  const copyNotes: number[] = [...notes]
  copyNotes.push(grade)
  return copyNotes
}

// funcion que elimina una nota, recibe el array notas y como segundo parametro 1 o -1, si es 1, elimina la primera posicion del array y devuelve una copia, si es -1 elimina la ultima posicion del array devuelve una copia. No mutamos el array del parametro ojo y me lo demostrais haciendo un clg del array del parametro para asegurar que no lo has mutado
/**
 * Elimina la primera o la última nota de una copia del array, sin mutar el original.
 * Muestra por consola la copia y el array original para demostrar que no se ha mutado.
 * @param notes Array de notas original
 * @param t 1 para eliminar la primera nota, -1 para eliminar la última
 * @returns Una copia del array sin la nota eliminada
 */
function deleteGrade(notes: number[], t: 1 | -1): number[] {
  const copyNotes = [...notes]
  if (t === 1) {
    copyNotes.shift()
  } else if (t === -1) {
    copyNotes.pop()
  }
  console.log("CopyNotes: ", copyNotes)
  console.log("Notes (sin mutar): ", notes)
  return copyNotes
}

// ----- funcion de ejecucion
/**
 * Ejecuta y prueba todas las funciones del ejercicio con el array de notas.
 */
export function ejercicio2(): void {
  showNotes(notas)
  calculateAverage(notas)
  console.log("Mediana:", calculateMedian(notas))
  console.log("Original:", notas)
  bestNote(notas)
  console.log("Con nota nueva:", addGrade(notas, 5))
  deleteGrade(notas, 1)
  deleteGrade(notas, -1)
  console.log("Original al final:", notas)
}
