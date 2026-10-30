
import { students } from "./services/students";
import { average, isPassed, findByName } from "./utils/grades"

// const averageText = document.getElementById("average")
const averageText = document.querySelector("#average")
const listU = document.querySelector("#student-list")
if (!(averageText instanceof HTMLParagraphElement)) {
  throw new Error("Falta el párrafo con id average")
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("Falta la etiqueta <ul>")
}

//input de busqueda
const inputSearch = document.createElement("input")
inputSearch.type = "password"
inputSearch.placeholder = "Escribe nombre para buscar"
inputSearch.style.backgroundColor = "gray"
if (findByName(students, inputSearch.textContent)) {

}

const media = average(students)

averageText.textContent = `Media: ${media.toFixed(2)}`
averageText.style.color = media >= 5 ? "green" : "red"

for (const student of students) {
  const item = document.createElement("li")
  item.textContent = `Estudiante: ${student.name} --- Nota: ${student.grade}`
  item.style.color = isPassed(student) ? "green" : "red"
  listU.appendChild(item)
}

averageText.append(inputSearch)
