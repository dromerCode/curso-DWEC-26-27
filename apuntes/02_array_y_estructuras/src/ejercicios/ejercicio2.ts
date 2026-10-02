// Enunciado: Descripción del ejercicio
// Autor: Daniel Romero
// Investigación: Fuentes consultadas
//
const notas: number[] = [2, 2, 4, 3, 4]


// funcion que muestre todas las notas
/**
 *  Funcion que muestra el valor de las notas pasadas como parametro
 * @param notes Descripción
 */
function showNotes(notes: number[]) {
  // console.log(notes)
  // note.foreach((note:number) => console.log(" ", note))
  console.log([...notes])
}

// funcion que calcule la media de las notas
/**
 *  Descripción de la función
 * @param notes Descripción
 * @returns Descripción
 */
function calculateAverage(notes: number[]) {
  let sum: number = 0
  notes.forEach((note: number) => sum += note)
  console.log(sum / notes.length)
}

// funcion que muestra la mayor nota y la posicion de esa nota
function bestNote(notes: number[]) {
  let best: number = 0
  notes.forEach((note: number) => if (note > best) { best = note })
  return best

}
// funcion que calcule la mediana de las notas
// funcion que devuelva un array con notas junto con la nota pasada como prarametro
// funcion que elimina una nota, recibe el array notas y como segundo parametro 1 o -1, si es 1, elimina la primera posicion del array y devuelve una copia, si es -1 elimina la ultima posicion del array devuelve una copia. No mutamos el array del parametro ojo y me lo demostrais haciendo un clg del array del parametro para asegurar que no lo has mutado

function deleteGrade(notes: number[], 1 | -1) : void {
  const copyNotes = [...notes]
  if(t=== 1) {
  copyNotes.shift()
} else if (t === -1) {
  copyNotes.pop()
}
console.log("CopyNotes: ", copyNotes)
console.log(notes)
}

// ----- funcion de ejecucion
export function ejercicio2(): void {
  showNotes(notas)
  calculateAverage(notas)
}
