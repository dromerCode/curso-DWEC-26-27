// Enunciado: tipos del TodoList
// Autor: Daniel Romero Cózar
// Investigación: Fuentes consultadas
//
//
export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: number;
  title: string;
  priority: Priority;
  done: boolean;
}
