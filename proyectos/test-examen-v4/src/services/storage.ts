import type { Book } from '../types/book';
import { initialBooks } from './books';

const STORAGE_KEY = 'examen:books';

export function isBook(value: unknown): value is Book {
  if (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id == 'number' &&
    'title' in value &&
    typeof value.title == 'string' &&
    'author' in value &&
    typeof value.author == 'string' &&
    'year' in value &&
    typeof value.year == 'number' &&
    'cover' in value &&
    typeof value.cover == 'string' &&
    'favorite' in value &&
    typeof value.favorite == 'boolean'
  ) {
    return true;
  }
  return false;
}

export function loadBooks(): readonly Book[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) return initialBooks;
  try {
    const data: unknown = JSON.parse(saved);
    if (Array.isArray(data) && data.every(isBook)) return data;
  } catch {}
  return initialBooks;
}

export function saveBooks(books: readonly Book[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}
