// =====================================================================
// PASO 2 · DATOS
// ---------------------------------------------------------------------
// Los datos con los que arranca la aplicación.
// Error típico de examen: repetir un id. Si dos productos tienen id 3,
// al borrar uno se borran los dos (el filtro compara por id).
// =====================================================================

import type { Product } from "../types/product";

export const initialProducts: readonly Product[] = [
  { id: 1, name: "Teclado mecánico", price: 80, favorite: true },
  { id: 2, name: "Ratón inalámbrico", price: 25, favorite: false },
  { id: 3, name: 'Monitor 27"', price: 220, favorite: false },
  { id: 4, name: 'Monitor 32"', price: 420, favorite: false },
];
