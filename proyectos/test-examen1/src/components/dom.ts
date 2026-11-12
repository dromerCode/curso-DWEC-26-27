import type { Product } from '../types/product';

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error('Error en el selector de tipos');
  }
  return element;
}

// componente1: recibe un texto y devuelve un <h1>

export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement('h1');
  title.textContent = text;
  return title;
}

// componente2

export function createSearchInput(): HTMLInputElement {
  const input = document.createElement('input');
  input.type = 'search';
  input.placeholder = 'Buscar Producto...';
  return input;
}

// componente3

export function createList(): HTMLUListElement {
  return document.createElement('ul');
}

export function createProductItem(product: Product): HTMLElement {
  const item = document.createElement('li');
  const text = document.createElement('span');
  text.textContent = `${product.name} --- ${product.price.toFixed(2)} €`;
  const button = document.createElement('button');
  const buttonFav = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Borrar';
  buttonFav.textContent = 'Favorite';
  item.append(text, button);
  return item;
}

export function createFooter(name: string): HTMLElement {
  const footer = document.createElement('footer');
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  footer.textContent = `${name} - ${date} - ${time}`;
  return footer;
}
