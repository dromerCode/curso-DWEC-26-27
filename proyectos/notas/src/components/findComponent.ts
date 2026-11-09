import { students } from '../services/students';
import { createTag } from './dom';
import { createTable } from './tableComponent';

export function mountFind1(container: HTMLElement): void {
  const input = document.createElement('input');
  const btn = createTag('button', 'Buscar', []);
  input.placeholder = 'Busca aqui';
  const divResultados = createTag('div', '', []);
  container.append(input, btn, divResultados);
  btn.addEventListener('click', () => {
    const encontrados = students.filter((student) => student.name.includes(input.value));
    divResultados.textContent = '';
    divResultados.append(createTable(encontrados));
  });
}

export function mountFind2(container: HTMLElement): void {
  const input = document.createElement('input');
  const btn = createTag('button', 'Buscar', []);
  input.placeholder = 'Busca aqui';
  const divResultados = createTag('div', '', []);
  container.append(input, btn, divResultados);
  function buscar(): void {
    const encontrados = students.filter((student) => student.name.includes(input.value));
    divResultados.textContent = '';
    divResultados.append(createTable(encontrados));
  }
  btn.addEventListener('click', buscar);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') buscar();
  });
}

export function mountFind3(container: HTMLElement): void {
  const input = document.createElement('input');
  const btn = createTag('button', 'Buscar', []);
  input.placeholder = 'Busca aqui';
  const divResultados = createTag('div', '', []);
  container.append(input, btn, divResultados);
  function buscar(): void {
    const encontrados = students.filter((student) => student.name.includes(input.value));
    divResultados.textContent = '';
    divResultados.append(createTable(encontrados));
  }
  btn.addEventListener('click', buscar);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') buscar();
  });
  input.addEventListener('input', buscar);
}
