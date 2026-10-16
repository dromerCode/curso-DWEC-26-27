const phones = new Map<string, string>();

phones.set("Ana", "293823924")
phones.set("Pedro", "293823924")
phones.set("Juan", "293823924")

console.log(phones.size)
console.log(phones.get("Ana"))
console.log(phones.get("Maite")) //devuelve undefined

// grades de una clase
//
const grades = new Map<string, number>([
  ["Ana", 9],
  ["Pedro", 2],
  ["Maite", 2]
])

//añadir objetos al map
//
export function addGrade(name: string, grade: number): Map<string, number> {
  return grades.has(name) ? grades : grades.set(name, grade)
}

// obtener la nota de un alumno siempre y cuando existan
//
export function gradeOf(name: string): string {
  const grade = grades.get(name)
  return grade === undefined ? "No tiene nota" : `Nota: ${grade}`
}

addGrade("Julia", 0)
console.log(gradeOf("Ana"))
console.log(gradeOf("Julia")) // un 0 también es nota
console.log(gradeOf("Pepe"))

// contabilizar los votos de los alumnos
//
export function countVotes(votes: string[]): Map<string, number> {
  const count = new Map<string, number>()
  for (const vote of votes) {
    const previous = count.get(vote) ?? 0
    count.set(vote, previous + 1)
  }
  return count
}

//agrupar alumnos por clase, tengo una lista de alumnos y cada uno es de un grupo 2DWEC-A o 2DWEC-B
//construir un namesGroup que devuelva cada grupo con sus alumnos respectivos

interface Student {
  name: string;
  group: string;
}


export function namesGroup(students: Student[]): Map<string, string[]> {
  const groups = new Map<string, string[]>()
  for (const student of students) {
    const current = groups.get(student.group) ?? []
    groups.set(student.group, [...current, student.name])
  }
  return groups
}

const students: Student[] = [
  { name: "Ana", group: "2DWEC-A" },
  { name: "Pedro", group: "2DWEC-B" },
  { name: "Maite", group: "2DWEC-A" },
  { name: "Juan", group: "2DWEC-B" }
]

for (const [group, names] of namesGroup(students)) {
  console.log(`Grupo: ${group} Estudiantes: ${names.join(", ")}`)
}
