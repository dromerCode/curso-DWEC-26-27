//crear una funcion que obtenga la media de los estudiantesj
//

import type { Student } from "../types/student"

/**
 *  Calculo de la media de todos los alumnos
 * @param List student[] array de estudiantes
 * @returns Number average total
 */
export function average(list: Student[]): number {
  const total = list.reduce((acc, e) => acc + e.grade, 0)
  return list.length ? total / list.length : 0
}

export function isPassed(student: Student): boolean {
  return student.grade >= 5
}

export function passedStudents(list: Student[]): Student[] {
  return list.filter(isPassed)

}

/**
 * Comprueba si existe algún estudiante con ese nombre
 * @param list array de estudiantes
 * @param name nombre a buscar
 * @returns true si hay al menos uno con ese nombre
 */
export function findByName(list: Student[], name: string): boolean {
  return list.some(student => student.name === name)
}
