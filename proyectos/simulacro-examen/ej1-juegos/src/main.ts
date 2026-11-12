// Ejercicio 1 · Videoteca de juegos
// Pasos 4, 5 y 6: estado, render() y eventos

import {
  createGameForm,
  createGameItem,
  createList,
  createSearchInput,
  createTitle,
  getElement,
} from './components/dom';
import { loadGames, saveGames } from './services/storage';
import './style.css';
import type { AppState } from './types/game';

const app = getElement('#app', HTMLDivElement);
const searchInput = createSearchInput();
const form = createGameForm();
const counter = document.createElement('p');
const list = createList();

app.append(createTitle('Mis juegos'), searchInput, form, counter, list);

let state: AppState = {
  games: loadGames(),
  search: '',
};

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.games.filter(
    (g) => g.title.toLowerCase().includes(text) || g.platform.toLowerCase().includes(text),
  );
  const items = visible.map((game) => createGameItem(game, togglePlayed, deleteGame));
  list.replaceChildren(...items);
  counter.textContent = `Jugados: ${state.games.filter((g) => g.played).length} de ${state.games.length}`;
}

function deleteGame(id: number): void {
  state = {
    ...state,
    games: state.games.filter((g) => g.id !== id),
  };
  saveGames(state.games);
  render();
}

function togglePlayed(id: number): void {
  state = {
    ...state,
    games: state.games.map((g) => (g.id === id ? { ...g, played: !g.played } : g)),
  };
  saveGames(state.games);
  render();
}

searchInput.addEventListener('input', () => {
  state = { ...state, search: searchInput.value };
  render();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const title = String(data.get('title') ?? '').trim();
  const platform = String(data.get('platform') ?? '').trim();
  if (title === '') {
    return;
  }

  const newId = Math.max(0, ...state.games.map((g) => g.id)) + 1;

  state = {
    ...state,
    games: [...state.games, { id: newId, title, platform, played: false }],
  };
  form.reset();
  saveGames(state.games);
  render();
});

render();
