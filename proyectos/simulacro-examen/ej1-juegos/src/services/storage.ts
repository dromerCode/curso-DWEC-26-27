import type { Game } from '../types/game';
import { initialGames } from './games';

const STORAGE_KEY = 'examen:games';
export function isGame(value: unknown): value is Game {
  if (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id == 'number' &&
    'title' in value &&
    typeof value.title == 'string' &&
    'platform' in value &&
    typeof value.platform == 'string' &&
    'played' in value &&
    typeof value.played == 'boolean'
  ) {
    return true;
  }
  return false;
}

export function loadGames(): readonly Game[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) return initialGames;
  try {
    const data: unknown = JSON.parse(saved);
    if (Array.isArray(data) && data.every(isGame)) return data;
  } catch {}
  return initialGames;
}

export function saveGames(games: readonly Game[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}
