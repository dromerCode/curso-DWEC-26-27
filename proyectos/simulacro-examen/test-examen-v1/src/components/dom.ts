// =====================================================================
// PASO 3 · COMPONENTES
// ---------------------------------------------------------------------
// Un componente es una función que RECIBE datos y DEVUELVE un elemento.
// Reglas:
//   - No lee el estado global.
//   - No añade nada a la página (eso lo hace quien la llama).
//   - Si necesita avisar de un clic, recibe una función (callback).
// =====================================================================

import type { Product } from "../types/product";

// Busca un elemento y comprueba que es del tipo esperado.
// Si no existe, falla en ese mismo momento con un mensaje claro.
export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No encuentro ${selector} o no es del tipo esperado`);
  }
  return element;
}

// Recibe un texto -> devuelve un <h1>
export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

// No recibe nada -> devuelve un <input type="search">
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar producto...";
  return input;
}

// No recibe nada -> devuelve un <ul> vacío (render lo rellenará)
export function createList(): HTMLUListElement {
  return document.createElement("ul");
}

// Devuelve un formulario con nombre, precio y botón "Añadir".
// Damos `name` a cada input para leerlos luego con FormData.
export function createProductForm(): HTMLFormElement {
  const form = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.name = "name";
  nameInput.placeholder = "Nombre";
  nameInput.required = true; // el navegador no deja enviarlo vacío

  const priceInput = document.createElement("input");
  priceInput.name = "price";
  priceInput.type = "number";
  priceInput.min = "0";
  priceInput.step = "0.01";
  priceInput.placeholder = "Precio";
  priceInput.required = true;

  const button = document.createElement("button");
  button.type = "submit"; // submit: al pulsarlo se dispara el evento "submit" del form
  button.textContent = "Añadir";

  form.append(nameInput, priceInput, button);
  return form;
}

// Recibe un producto y DOS funciones -> devuelve su <li>.
// El componente no sabe QUÉ pasa al pulsar: solo avisa llamando a la función.
// Quién decide qué hacer es main.ts (el que tiene el estado).
export function createProductItem(
  product: Product,
  onToggleFavorite: (id: number) => void,
  onDelete: (id: number) => void,
): HTMLLIElement {
  const item = document.createElement("li");

  const text = document.createElement("span");
  text.textContent = `${product.name} - ${product.price.toFixed(2)} €`;

  const favButton = document.createElement("button");
  favButton.type = "button"; // "button": no envía ningún formulario
  favButton.textContent = product.favorite ? "★" : "☆";
  favButton.addEventListener("click", () => onToggleFavorite(product.id));

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Borrar";
  deleteButton.addEventListener("click", () => onDelete(product.id));

  item.append(favButton, text, deleteButton);
  return item;
}
