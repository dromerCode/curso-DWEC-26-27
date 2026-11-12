import {
  createFooter,
  createList,
  createProductItem,
  createSearchInput,
  createTitle,
  getElement,
} from './components/dom';
import { products } from './services/products';
import './style.css';
import type { Product } from './types/product';

//declaraciones de variables

const app = getElement('#app', HTMLDivElement);
const miNombre = createTitle('Daniel Romero');
// Creamos el input y la lista

const searchInput = createSearchInput();

const list = createList();
//inicio de la aplicaicon
app.append(miNombre, searchInput, list);

//La libreta original
interface AppState {
  products: readonly Product[];
  search: string;
}
// 1- estado de lal ibreta (usamos let para modificarlo)
let state: AppState = { products: products, search: '' };

//2 el render de la libreta y la segunda copia en pantalla

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.products.filter((p) => p.name.toLowerCase().includes(text));

  const items = visible.map((product) => {
    const item = createProductItem(product);
    item.querySelector('button').addEventListener('click', () => {
      state = {
        ...state,
        products: state.products.filter((p) => p.name.toLowerCase().includes(text)),
      };
      render();
    });
    return item;
  });
  list.replaceChildren(...item);
}

searchInput.addEventListener('input', () => {
  state = { ...state, search: searchInput.value.trim().toUpperCase() };
  render();
});

//Haremos un map de cada producto <li>
// y usaremos un replaceChildren para reemplazar todos los elementos que tenga la lista (list)
//
list.replaceChildren(...products.map(createProductItem));

function paint(products: readonly Product[]): void {
  const items = products.map((product) => {
    const item = createProductItem(product);
    return item;
  });
  list.replaceChildren(...items);
}

// Funcion que se ejecuta con cada pulsacion de tecla que le de
searchInput.addEventListener('input', () => {
  const text = searchInput.value.trim().toLowerCase();

  paint(products.filter((p) => p.name.toLowerCase().includes(text)));
});

app.append(createFooter('Daniel Romero'));
