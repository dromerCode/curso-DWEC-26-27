// Paso 1: aquí escribimos el código

function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra ${selector} o no es del tipo esperado`);
  }
  return element;
}

const titulo = getElement('#titulo', HTMLHeadingElement);
const buscador = getElement('#search', HTMLInputElement);
const lista = getElement('#list', HTMLUListElement);
const template = getElement('#card-template', HTMLTemplateElement);

titulo.textContent = 'Mi tienda';
buscador.placeholder = 'Escribe aqui';

// const li = document.createElement("li")
// const li2 = document.createElement("li")
// const li3 = document.createElement("li")
// li.textContent = "Teclado mecánico"
// li2.textContent = "Ratón inalambrico"
// li3.textContent = "Monitor 27"
// lista.append(li, li2)
// lista.prepend(li3)

interface Product {
  readonly id: number;
  name: string;
  price: number;
  stock: number;
}

const products: readonly Product[] = [
  { id: 1, name: 'Teclado mecánico', price: 80, stock: 5 },
  { id: 2, name: 'Ratón inalámbrico', price: 25, stock: 0 },
  { id: 3, name: 'Monitor 27"', price: 220, stock: 3 },
];

// function createCard(p: Product): HTMLLIElement {
//   const li = document.createElement("li")
//   li.textContent = p.name
//   return li
// }

function createCardFromTemplate(p: Product): DocumentFragment {
  const copy = template.content.cloneNode(true);
  if (!(copy instanceof DocumentFragment)) throw new Error('Plantillla inválida');

  const name = copy.querySelector('.name');
  if (name instanceof HTMLElement) name.textContent = p.name;

  const price = copy.querySelector('.price');
  if (price instanceof HTMLElement) price.textContent = `${p.price} €`;
  return copy;
}

lista.replaceChildren(...products.map(createCardFromTemplate));
