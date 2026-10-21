// F1 · logic.ts → las funciones average y passed

import type { Grade } from "./types";

export function average(list: readonly Grade[]): number {
  if (list.length === 0) return 0;
  return list.reduce((sum, g) => sum + g.mark, 0) / list.length;
}

export function passed(list: readonly Grade[]): Grade[] {
  return list.filter((g) => g.mark >= 5);
}
