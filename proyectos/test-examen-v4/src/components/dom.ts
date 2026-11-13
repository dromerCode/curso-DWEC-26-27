import type { Book } from '../types/book';

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error('Error en el selector de tipos');
  }
  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

export function createSearchInput(): HTMLInputElement {
  const element = document.createElement('input');
  element.type = 'search';
  element.placeholder = 'Buscar:';
  return element;
}

export function createList(): HTMLUListElement {
  const element = document.createElement('ul');
  element.className = 'catalog';
  return element;
}

export function createCounter(): HTMLElement {
  const element = document.createElement('p');
  return element;
}

export function createForm(): HTMLFormElement {
  const element = document.createElement('form');
  const titleInput = document.createElement('input');
  titleInput.name = 'title';
  titleInput.placeholder = 'Titulo:';
  const authorInput = document.createElement('input');
  authorInput.name = 'author';
  authorInput.placeholder = 'Autor:';
  const yearInput = document.createElement('input');
  yearInput.name = 'year';
  yearInput.type = 'number';
  yearInput.placeholder = 'Año:';
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Añadir';
  const error = document.createElement('p');
  element.append(titleInput, authorInput, yearInput, submitBtn, error);
  return element;
}

export function createBookItem(
  book: Book,
  onToggle: (id: number) => void,
  onDelete: (id: number) => void,
): HTMLLIElement {
  const element = document.createElement('li');
  const img = document.createElement('img');
  img.src = book.cover;
  img.alt = book.title;
  const strong = document.createElement('strong');
  strong.textContent = book.title;
  const span = document.createElement('span');
  span.textContent = `${book.author} - ${book.year}`;
  const favouriteBtn = document.createElement('button');
  favouriteBtn.type = 'button';
  favouriteBtn.textContent = book.favorite ? '★ Favorito' : '☆ Favorito';
  favouriteBtn.addEventListener('click', () => onToggle(book.id));
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Borrar';
  deleteBtn.addEventListener('click', () => onDelete(book.id));
  element.append(img, strong, span, favouriteBtn, deleteBtn);
  return element;
}
