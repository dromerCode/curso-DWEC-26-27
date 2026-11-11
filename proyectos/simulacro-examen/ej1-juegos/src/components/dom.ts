import type { Game } from '../types/game';

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No encuentro ${selector} o no es del tipo esperado`);
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
  return element;
}

export function createGameForm(): HTMLFormElement {
  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.name = 'title';
  nameInput.placeholder = 'Nombre:';
  nameInput.required = true;
  const platformSelect = document.createElement('select');
  platformSelect.name = 'platform';
  const platforms: string[] = ['PC', 'Switch', 'PlayStation'];
  const options = platforms.map((platform) => {
    const option = document.createElement('option');
    option.value = platform;
    option.textContent = platform;
    return option;
  });
  platformSelect.append(...options);
  const btn = document.createElement('button');
  btn.type = 'submit';
  btn.textContent = 'Añadir';
  form.append(nameInput, platformSelect, btn);
  return form;
}

export function createGameItem(
  game: Game,
  onTogglePlayed: (id: number) => void,
  onDelete: (id: number) => void,
): HTMLLIElement {
  const item = document.createElement('li');
  const text = document.createElement('span');
  text.textContent = `${game.title} (${game.platform})`;
  const btnPlayed = document.createElement('button');
  btnPlayed.type = 'button';
  btnPlayed.textContent = game.played ? 'Jugado' : 'Pendiente';
  btnPlayed.addEventListener('click', () => onTogglePlayed(game.id));
  const btnDelete = document.createElement('button');
  btnDelete.type = 'button';
  btnDelete.textContent = 'Borrar';
  btnDelete.addEventListener('click', () => onDelete(game.id));
  item.append(text, btnPlayed, btnDelete);
  return item;
}
