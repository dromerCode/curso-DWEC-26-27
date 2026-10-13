// Enunciado: TodoList en TypeScript (ver readme.md)
// Autor: Daniel Romero Cózar
// Investigación:
//
import type { Task } from "../../types/task.ts";
import { createTask, editTask, pendingByPriority, removeDone, rename, toggleDone } from "./helpers/todolist.ts";

// Empezamos con la lista vacía y cada función nos devuelve una lista NUEVA
const empty: Task[] = []

const v1 = createTask(empty, 'Estudiar TypeScript', 'high')
const v2 = createTask(v1, 'Comprar pan', 'low')
const v3 = createTask(v2, 'Hacer deberes DWEC', 'medium')
console.log('Lista inicial', v3)

const v4 = toggleDone(v3, 2)
console.log('Marco "Comprar pan" como hecha', v4)

const v5 = rename(v4, 3, '  Hacer el TodoList de DWEC  ')
console.log('Renombro la 3 (con trim)', v5)
console.log('Renombrar con título vacío no cambia nada', rename(v5, 3, '   ') === v5)

const v6 = editTask(v5, 1, { priority: 'low', title: 'Repasar TypeScript' })
console.log('Edito la 1 (prioridad y título)', v6)

console.log('Pendientes por prioridad', pendingByPriority(v6))

const v7 = removeDone(v6, 2)
console.log('Quito la 2 (estaba hecha)', v7)
console.log('Intento quitar la 1 (no está hecha), no cambia', removeDone(v7, 1) === v7)

// La lista original no se ha tocado en ningún momento
console.log('Lista original sigue vacía', empty)
