import type { Recipe } from '../types/recipe';

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

export function createFilterCheckBox(): HTMLLabelElement {
  const element = document.createElement('label');
  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = 'only-vegetarian';
  element.append(inputElement, ' Solo vegetarianas');
  return element;
}

export function createRecipeForm(): HTMLFormElement {
  const element = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.name = 'name';
  const minutesInput = document.createElement('input');
  minutesInput.name = 'minutes';
  minutesInput.type = 'number';
  const label = document.createElement('label');
  const inputElement = document.createElement('input');
  inputElement.name = 'vegetarian';
  inputElement.type = 'checkbox';
  label.append(inputElement, ' Vegetariana');
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Añadir';
  submitBtn.type = 'submit';
  element.append(nameInput, minutesInput, label, submitBtn);
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

export function createRecipeItem(recipe: Recipe, onDelete: (id: number) => void): HTMLLIElement {
  const element = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = `${recipe.name} - ${recipe.minutes} min ${recipe.vegetarian ? '[V]' : ''}`;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Borrar';
  deleteBtn.addEventListener('click', () => onDelete(recipe.id));
  element.append(span, deleteBtn);
  return element;
}
