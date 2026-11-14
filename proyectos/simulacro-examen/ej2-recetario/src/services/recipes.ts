import type { Recipe } from '../types/recipe';

export const initialRecipes: readonly Recipe[] = [
  { id: 1, name: 'Tortilla de patatas', minutes: 40, vegetarian: true },
  { id: 2, name: 'Lentejas con chorizo', minutes: 60, vegetarian: false },
  { id: 3, name: 'Ensalada César', minutes: 15, vegetarian: false },
  { id: 4, name: 'Gazpacho', minutes: 20, vegetarian: true },
  { id: 5, name: 'Pasta al pesto', minutes: 25, vegetarian: true },
];
