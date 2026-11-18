import { rooms } from '../services/devices';
import type { Device } from '../types/device';

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

export function createSummary(): HTMLParagraphElement {
  const element = document.createElement('p');
  return element;
}

export function createList(): HTMLUListElement {
  const element = document.createElement('ul');
  return element;
}

export function createFilter(): HTMLSelectElement {
  const element = document.createElement('select');
  const all = document.createElement('option');
  all.value = '';
  all.textContent = 'Todas';
  const options = rooms.map((room) => {
    const option = document.createElement('option');
    option.value = room;
    option.textContent = room;
    return option;
  });
  element.append(all, ...options);
  return element;
}

export function createForm(): HTMLFormElement {
  const element = document.createElement('form');
  const codeInput = document.createElement('input');
  codeInput.name = 'code';
  codeInput.placeholder = 'Código:';
  const roomSelect = document.createElement('select');
  roomSelect.name = 'room';
  const options = rooms.map((room) => {
    const option = document.createElement('option');
    option.value = room;
    option.textContent = room;
    return option;
  });
  roomSelect.append(...options);
  const btn = document.createElement('button');
  btn.type = 'submit';
  btn.textContent = 'Añadir';
  const error = document.createElement('p');
  element.append(codeInput, roomSelect, btn, error);
  return element;
}

export function createItem(
  device: Device,
  onBroken: (id: number) => void,
  onDelete: (id: number) => void,
): HTMLLIElement {
  const element = document.createElement('li');
  const text = document.createElement('span');
  text.textContent = `${device.code} · ${device.room}${device.broken ? ' AVERIADO' : ''}`;
  if (device.broken) element.style.color = 'red';
  const btnBroken = document.createElement('button');
  btnBroken.type = 'button';
  btnBroken.textContent = device.broken ? 'Reparado' : 'Averiado';
  btnBroken.addEventListener('click', () => onBroken(device.id));
  const btnDelete = document.createElement('button');
  btnDelete.type = 'button';
  btnDelete.textContent = 'Borrar';
  btnDelete.addEventListener('click', () => onDelete(device.id));
  element.append(text, btnBroken, btnDelete);
  return element;
}
