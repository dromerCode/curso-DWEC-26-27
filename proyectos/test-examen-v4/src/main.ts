// test-examen-v4 · Mi biblioteca
// Empieza por src/types/book.ts (paso 1) y sigue la hoja del enunciado.
import { createCounter, createForm, createList, createSearchInput, createTitle } from "./components/dom";
import { initialBooks } from "./services/books";
import "./style.css";
import type { AppState } from "./types/book";

const app = getElement("#app", HTMLDivElement)
const searchInput = createSearchInput()
const form = createForm()
const counter = createCounter()
const list = createList()

app.append(createTitle("Mis libros"), searchInput, form, counter, list)

let state: AppState = {
  books = initialBooks
  search = ""
  error = ""
}

