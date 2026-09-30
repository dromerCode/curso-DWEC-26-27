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
function obtenerNombres(alumnos[]: Alumno){
  return alumnos.map((alumno) => alumno.nombre)
}

const obtenerNombresV2= (alumnos: ALumno[]) => alumno.map( (alumno) => alumno.nombre)



// ------ inicializar el ejercicio -----
//

console.log(obtenerNombres(alumnado))
