// Ejercicio 2 · Recetario
// Pasos 4, 5 y 6: estado, render() y eventos

import {
  createFilterCheckBox,
  createList,
  createRecipeForm,
  createRecipeItem,
  createSummary,
  createTitle,
  getElement,
} from './components/dom';
import { initialRecipes } from './services/recipes';
import { loadRecipes, saveRecipes } from './services/storage';
import './style.css';
import type { AppState } from './types/recipe';

const app = getElement('#app', HTMLDivElement);
const filterLabel = createFilterCheckBox();
const form = createRecipeForm();
const summary = createSummary();
const list = createList();

app.append(createTitle('Recetario'), filterLabel, form, summary, list);

const filterInput = getElement('#only-vegetarian', HTMLInputElement);

let state: AppState = { recipes: loadRecipes() ?? initialRecipes, onlyVegetarian: false };

function render(): void {
  const visible = state.recipes.filter((r) => !state.onlyVegetarian || r.vegetarian);
  list.replaceChildren(...visible.map((r) => createRecipeItem(r, deleteRecipe)));
  filterInput.checked = state.onlyVegetarian;
  const total = visible.reduce((acc, r) => acc + r.minutes, 0);
  if (visible.length === 0) {
    summary.textContent = '0 recetas';
  } else {
    summary.textContent = `${visible.length} recetas - tiempo medio: ${Math.round(total / visible.length)} min`;
  }
}

function deleteRecipe(id: number): void {
  state = {
    ...state,
    recipes: state.recipes.filter((r) => r.id !== id),
  };
  saveRecipes(state.recipes);
  render();
}

filterInput.addEventListener('change', () => {
  state = {
    ...state,
    onlyVegetarian: filterInput.checked,
  };
  render();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') ?? '').trim();
  const minutes = Number(data.get('minutes') ?? '');
  const vegetarian = Boolean(data.get('vegetarian') ?? null);

  if (name === '' || !Number.isInteger(minutes) || minutes <= 0) {
    return;
  }

  const newId = Math.max(0, ...state.recipes.map((r) => r.id)) + 1;

  state = {
    ...state,
    recipes: [...state.recipes, { id: newId, name, minutes, vegetarian }],
  };
  form.reset();
  saveRecipes(state.recipes);
  render();
});

render();
