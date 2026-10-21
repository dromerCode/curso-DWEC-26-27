// F1 · Calculadora de notas en módulos (medio)
// main.ts → los dos console.log; es el único que ejecuta algo.
// Reglas: export con nombre (sin default), import type para Grade, rutas sin .ts ('./types').
//

import { grades } from "./data";
import { average, passed } from "./logic";

// Programa de partida (repártelo en types.ts, data.ts, logic.ts y aquí):
//
// interface Grade {
//   student: string;
//   subject: string;
//   mark: number;
// }
//
// const grades: Grade[] = [
//   { student: 'Ana', subject: 'DWEC', mark: 8 },
//   { student: 'Luis', subject: 'DWEC', mark: 4 },
//   { student: 'Marta', subject: 'DWEC', mark: 6.5 },
// ];
//
// function average(list: readonly Grade[]): number {
//   if (list.length === 0) return 0;
//   return list.reduce((sum, g) => sum + g.mark, 0) / list.length;
// }
//
// function passed(list: readonly Grade[]): Grade[] {
//   return list.filter((g) => g.mark >= 5);
// }
//
console.log(`Media: ${average(grades).toFixed(2)}`);
console.log(`Aprobados: ${passed(grades).map((g) => g.student).join(', ')}`);
// // Media: 6.17
// // Aprobados: Ana, Marta

