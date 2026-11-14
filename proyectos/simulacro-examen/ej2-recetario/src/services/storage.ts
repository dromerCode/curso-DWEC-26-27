import type { Recipe } from '../types/recipe';

const KEY = 'examen:recipes';
export function saveRecipes(recipes: readonly Recipe[]): void {
  localStorage.setItem(KEY, JSON.stringify(recipes));
}

export function loadRecipes(): Recipe[] | null {
  const text = localStorage.getItem(KEY);
  if (text === null) return null;
  try {
    const data: unknown = JSON.parse(text);
    if (Array.isArray(data) && data.every(isRecipe)) return data;
  } catch {}
  return null;
}

function isRecipe(x: unknown): x is Recipe {
  if (typeof x !== 'object' || x === null) return false;

  const r = x as Record<string, unknown>;

  return (
    typeof r.id === 'number' &&
    typeof r.name === 'string' &&
    typeof r.minutes === 'number' &&
    typeof r.vegetarian === 'boolean'
  );
}
