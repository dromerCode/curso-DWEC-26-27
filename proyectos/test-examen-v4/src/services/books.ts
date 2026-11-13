// =====================================================================
// PASO 2 · DATOS
// ---------------------------------------------------------------------
// Diez libros de la API AmazonBooks del aula, copiados a mano: todavía
// no pedimos nada por red.
//
// `cover` es la ruta de la portada. Las imágenes están en public/covers/
// y Vite las sirve desde la raíz: "/covers/libro-1.jpg" (sin "public").
// =====================================================================

import type { Book } from "../types/book";

// Portada para los libros que se añaden con el formulario
export const DEFAULT_COVER = "/covers/sin-portada.svg";

export const initialBooks: readonly Book[] = [
  { id: 1, title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", year: 1997, cover: "/covers/libro-1.jpg", favorite: false },
  { id: 4, title: "El hobbit", author: "J.R.R. Tolkien", year: 1937, cover: "/covers/libro-4.jpg", favorite: true },
  { id: 11, title: "En llamas", author: "Suzanne Collins", year: 2009, cover: "/covers/libro-11.jpg", favorite: false },
  { id: 15, title: "1984", author: "George Orwell", year: 1949, cover: "/covers/libro-15.jpg", favorite: false },
  { id: 31, title: "La sombra del viento", author: "Carlos Ruiz Zafón", year: 2001, cover: "/covers/libro-31.jpg", favorite: false },
  { id: 37, title: "El resplandor", author: "Stephen King", year: 1977, cover: "/covers/libro-37.jpg", favorite: false },
  { id: 41, title: "Cien años de soledad", author: "Gabriel García Márquez", year: 1967, cover: "/covers/libro-41.jpg", favorite: false },
  { id: 71, title: "Dune", author: "Frank Herbert", year: 1965, cover: "/covers/libro-71.jpg", favorite: true },
  { id: 80, title: "Asesinato en el Orient Express", author: "Agatha Christie", year: 1934, cover: "/covers/libro-80.jpg", favorite: false },
  { id: 86, title: "El principito", author: "Antoine de Saint-Exupéry", year: 1943, cover: "/covers/libro-86.jpg", favorite: false },
];
