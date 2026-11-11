// =====================================================================
// PASO 1 · TIPOS
// ---------------------------------------------------------------------
// Antes de escribir datos o pantallas, decimos CÓMO ES un producto.
// TypeScript nos avisará si nos olvidamos de un campo o lo escribimos mal.
// =====================================================================

export interface Product {
  readonly id: number; // identificador ÚNICO: nunca se repite ni cambia
  name: string;
  price: number;
  favorite: boolean; // true si el usuario lo ha marcado con la estrella
}

// El estado de la aplicación: TODO lo que puede cambiar mientras se usa.
// Si algo se ve en pantalla y puede cambiar, tiene que estar aquí.
export interface AppState {
  products: readonly Product[]; // la lista completa (sin filtrar)
  search: string; // lo que el usuario ha escrito en el buscador, tal cual
}
