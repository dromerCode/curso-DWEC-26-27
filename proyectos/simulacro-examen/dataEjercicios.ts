// =====================================================================
// dataEjercicios.ts · Datos de los ejercicios del simulacro de examen
// ---------------------------------------------------------------------
// Copia en tu proyecto SOLO el bloque del ejercicio que vayas a hacer:
//   - la interface va a  src/types/<nombre>.ts
//   - el array va a      src/services/<nombre>.ts
// No cambies los datos: los resultados esperados del enunciado
// están calculados con ellos.
// =====================================================================

// ---------------------------------------------------------------------
// Ejercicio 1 · Videoteca de juegos
// ---------------------------------------------------------------------
export interface Game {
  readonly id: number;
  title: string;
  platform: string;
  played: boolean;
}

export const initialGames: readonly Game[] = [
  { id: 1, title: "Hollow Knight", platform: "PC", played: true },
  { id: 2, title: "Mario Kart 8", platform: "Switch", played: true },
  { id: 3, title: "Celeste", platform: "PC", played: false },
  { id: 4, title: "Zelda: Tears of the Kingdom", platform: "Switch", played: false },
  { id: 5, title: "Stardew Valley", platform: "PC", played: false },
];

// ---------------------------------------------------------------------
// Ejercicio 2 · Recetario
// ---------------------------------------------------------------------
export interface Recipe {
  readonly id: number;
  name: string;
  minutes: number; // tiempo de preparación
  vegetarian: boolean;
}

export const initialRecipes: readonly Recipe[] = [
  { id: 1, name: "Tortilla de patatas", minutes: 40, vegetarian: true },
  { id: 2, name: "Lentejas con chorizo", minutes: 60, vegetarian: false },
  { id: 3, name: "Ensalada César", minutes: 15, vegetarian: false },
  { id: 4, name: "Gazpacho", minutes: 20, vegetarian: true },
  { id: 5, name: "Pasta al pesto", minutes: 25, vegetarian: true },
];

// ---------------------------------------------------------------------
// Ejercicio 3 · Equipos del aula
// ---------------------------------------------------------------------
export interface Device {
  readonly id: number;
  code: string; // etiqueta del equipo, por ejemplo "PC-01"
  room: string;
  broken: boolean; // true si está averiado
}

export const initialDevices: readonly Device[] = [
  { id: 1, code: "PC-01", room: "A12", broken: false },
  { id: 2, code: "PC-02", room: "A12", broken: true },
  { id: 3, code: "PC-03", room: "A12", broken: false },
  { id: 4, code: "PROY-01", room: "A12", broken: false },
  { id: 5, code: "PC-10", room: "B04", broken: true },
  { id: 6, code: "PC-11", room: "B04", broken: false },
];

// ---------------------------------------------------------------------
// Ejercicio 4 · Actividades extraescolares
// ---------------------------------------------------------------------
export interface Activity {
  readonly id: number;
  name: string;
  places: number; // plazas totales
  enrolled: number; // inscritos (nunca más que places)
}

export const initialActivities: readonly Activity[] = [
  { id: 1, name: "Robótica", places: 12, enrolled: 11 },
  { id: 2, name: "Ajedrez", places: 16, enrolled: 4 },
  { id: 3, name: "Teatro", places: 20, enrolled: 20 },
  { id: 4, name: "Baloncesto", places: 15, enrolled: 9 },
];

// ---------------------------------------------------------------------
// Ejercicio 5 · Pedido de la cafetería
// ---------------------------------------------------------------------
export interface OrderLine {
  readonly id: number;
  product: string;
  unitPrice: number;
  quantity: number; // siempre 1 o más
}

export const initialOrder: readonly OrderLine[] = [
  { id: 1, product: "Café con leche", unitPrice: 1.3, quantity: 2 },
  { id: 2, product: "Tostada con tomate", unitPrice: 1.8, quantity: 1 },
  { id: 3, product: "Zumo de naranja", unitPrice: 2.2, quantity: 1 },
];

// ---------------------------------------------------------------------
// Ejercicio 6 · Lista de reproducción
// ---------------------------------------------------------------------
export interface Song {
  readonly id: number;
  title: string;
  artist: string;
  seconds: number; // duración en segundos
  favorite: boolean;
}

export const initialSongs: readonly Song[] = [
  { id: 1, title: "Entre dos aguas", artist: "Paco de Lucía", seconds: 362, favorite: true },
  { id: 2, title: "Malamente", artist: "Rosalía", seconds: 150, favorite: false },
  { id: 3, title: "La flaca", artist: "Jarabe de Palo", seconds: 268, favorite: true },
  { id: 4, title: "Mediterráneo", artist: "Joan Manuel Serrat", seconds: 205, favorite: false },
  { id: 5, title: "Pienso en tu mirá", artist: "Rosalía", seconds: 193, favorite: false },
];
