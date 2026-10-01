// Ejercicio uso de filter maps y otros en typescript
// Crear programa que meustre el nombre de todos los alumnos,
// Calucle la nota media de cada alumno,
// Mostrar alumno con nota media más alta
// Calcular la media Global de la clase
//
//  {nombre: "Luis", edad: 22, notas: [5,4,6,3]}
//  {nombre: "Juan", edad: 22, notas: [2,8,7,6]}
//  {nombre: "Pepe", edad: 22, notas: [1,9,4,2]}
//  {nombre: "Pedro", edad: 22, notas: [5,3,10,7]}
//
// Para declarar tipos de objetos en typescript uso type y el objeto comienza siempre en mayuscula
//
//  --- declaracion de tipos ---
type Alumno = {
  nombre: string;
  edad: number;
  notas: number[];
}



// --------- declaracion de variables ---------

const alumnado : Alumno[] = [

  {nombre: "Luis", edad: 22, notas: [5,4,6,3]},
  {nombre: "Juan", edad: 22, notas: [2,8,7,6]},
  {nombre: "Pepe", edad: 22, notas: [1,9,4,2]},
  {nombre: "Pedro", edad: 22, notas: [5,3,10,7]}

] 

// Obten los nombres (solo los nombres) de todos los alumnos
function obtenerNombres(alumnos: Alumno[]){
  return alumnos.map((alumno) => alumno.nombre)
}

const obtenerNombresV2= (alumnos: Alumno[]) => alumnos.map( (alumno) => alumno.nombre)

// Obtener la nota media de cada alumno

function obtenerNotaMedia(alumnos: Alumno[]){
  return alumnos.map((alumno) => {
    let notaMedia: number = 0;
    let contar: number = 0;
    for (const nota of alumno.notas) {
      notaMedia+=nota
      contar++
    }
    return {nombre: alumno.nombre, media:notaMedia/contar}
  })
    
}

// Obtener la nota media más alta
function obtenerNotaMasAlta(alumnos: Alumno[]){
  let masAlta: number = 0
  let nombre: string = ''
  for (const alumno of obtenerNotaMedia(alumnos)){
    if (alumno.media>masAlta){
      masAlta = alumno.media
      nombre = alumno.nombre
    }
  }
  return {nombre: nombre, media: masAlta}
}


// Obtener la nota media global

function obtenerNotaMediaGlobal(alumnos: Alumno[]){
    let notaMedia: number = 0
    let contar: number = 0
  alumnos.map((alumno) => {
    for (const nota of alumno.notas) {
      notaMedia+=nota
      contar++
    }
  })
  return `La nota media global es de ${notaMedia/contar}`
}
// ------ finicializar el ejercicio -----
//

console.log("Ejer1, Nombres de los alumnos:")
console.log(obtenerNombres(alumnado))
console.log("Ejer2, Alumnos y sus notas medias:")
console.log(obtenerNotaMedia(alumnado))
console.log("Ejer3, Alumno con la nota más alta:")
console.log(obtenerNotaMasAlta(alumnado))
console.log("Ejer4, Nota media global:")
console.log(obtenerNotaMediaGlobal(alumnado))
