// test-examen-v4 · Mi biblioteca
// Empieza por src/types/book.ts (paso 1) y sigue la hoja del enunciado.
import {
  createBookItem,
  createCounter,
  createForm,
  createList,
  createSearchInput,
  createTitle,
  getElement,
} from './components/dom';
import { DEFAULT_COVER } from './services/books';
import { loadBooks, saveBooks } from './services/storage';
import './style.css';
import type { AppState } from './types/book';

const app = getElement('#app', HTMLDivElement);
const searchInput = createSearchInput();
const form = createForm();
const counter = createCounter();
const list = createList();

app.append(createTitle('Mis libros'), searchInput, form, counter, list);
const errorP = getElement('form p', HTMLParagraphElement);

let state: AppState = {
  books: loadBooks(),
  search: '',
  error: '',
};

function toggleFavorite(id: number): void {
  state = {
    ...state,
    books: state.books.map((book) =>
      book.id === id ? { ...book, favorite: !book.favorite } : book,
    ),
  };
  saveBooks(state.books);
  render();
}

function toggleDelete(id: number): void {
  state = {
    ...state,
    books: state.books.filter((book) => book.id !== id),
  };
  saveBooks(state.books);
  render();
}

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visibleBooks = state.books.filter(
    (book) => book.title.toLowerCase().includes(text) || book.author.toLowerCase().includes(text),
  );
  list.replaceChildren(
    ...visibleBooks.map((book) => createBookItem(book, toggleFavorite, toggleDelete)),
  );
  counter.textContent = `${state.books.length} libros y ${state.books.filter((book) => book.favorite).length} favoritos`;
  errorP.textContent = state.error;
}
searchInput.addEventListener('input', () => {
  state = {
    ...state,
    search: searchInput.value,
  };
  render();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const title = String(data.get('title') ?? '').trim();
  const author = String(data.get('author') ?? '').trim();
  const year = Number(data.get('year'));

  if (title === '' || author === '') {
    state = { ...state, error: 'El titulo y el autor son obligatorios' };
    render();
    return;
  }

  if (!Number.isInteger(year) || year <= 0) {
    state = { ...state, error: 'El año no es valido' };
    render();
    return;
  }

  const newId = Math.max(0, ...state.books.map((b) => b.id)) + 1;

  state = {
    ...state,
    books: [
      ...state.books,
      { id: newId, title, author, year, cover: DEFAULT_COVER, favorite: false },
    ],
    error: '',
  };
  form.reset();
  saveBooks(state.books);
  render();
});
render();
