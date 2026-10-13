/**
- createTask
- toggleDone
- rename
- removeDone
- editTask
- pendingByPriority
*/

import type { Priority, Task } from "../../../types/task.ts";

/**
 * Función que crea una nueva tarea
 * @param list Array de tareas
 * @param title título de la tarea
 * @param priority prioridad de la tarea
 * @returns una lista nueva con la tarea añadida al final
 */
export function createTask(list: Task[], title: string, priority: Priority): Task[] {
  // id = el mayor id que haya + 1 (si la lista está vacía, empieza en 1)
  const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1
  return [...list, { id, title, priority, done: false }]
}

/**
 * Marca o desmarca una tarea como hecha
 * @param list lista de tareas
 * @param id id de la tarea
 */
export const toggleDone = (list: Task[], id: number): Task[] => list
  .map(t => t.id === id ? { ...t, done: !t.done } : t)

/**
 * Renombra una tarea
 * @param list array de tareas
 * @param id id de la tarea
 * @param title nuevo título (si viene vacío no se cambia nada)
 */
export function rename(list: Task[], id: number, title: string): Task[] {
  const clean = title.trim()
  if (clean === '') return list
  return list.map(t => t.id === id ? { ...t, title: clean } : t)
}

/**
 * Quita de la lista una tarea, pero solo si ya está terminada
 * @param list lista de tareas
 * @param id id de la tarea
 */
export const removeDone = (list: Task[], id: number): Task[] => {
  return list.find(t => t.id === id)?.done ? list.filter(t => t.id !== id) : list
}

/**
 * Edita algún campo de una tarea (cualquiera menos el id)
 * @param list lista de tareas
 * @param id id de la tarea
 * @param changes los campos a cambiar: Partial<Omit<Task, 'id'>>
 */
export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {
  return list.map(t => t.id === id ? { ...t, ...changes } : t)
}

// le da un número a cada prioridad para poder ordenarlas
const order: Record<Priority, number> = { high: 2, medium: 1, low: 0 }

/**
 * Devuelve los títulos de las tareas pendientes, de más a menos prioritaria
 * @param list lista de tareas
 */
export const pendingByPriority = (list: Task[]): string[] => {
  return list
    .filter(t => !t.done)
    .toSorted((a, b) => order[b.priority] - order[a.priority])
    .map(t => t.title)
}
