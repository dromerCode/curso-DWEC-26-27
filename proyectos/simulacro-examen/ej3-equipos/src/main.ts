// Ejercicio 3 · Equipos del aula
// Pasos 4, 5 y 6: estado, render() y eventos

import {
  createFilter,
  createForm,
  createItem,
  createList,
  createSummary,
  createTitle,
  getElement,
} from './components/dom';
import { initialDevices, rooms } from './services/devices';
import { loadDevices, saveDevices } from './services/storage';
import './style.css';
import type { AppState } from './types/device';

const app = getElement('#app', HTMLDivElement);
const filter = createFilter();
const form = createForm();
const summary = createSummary();
const list = createList();

app.append(createTitle('Equipos'), filter, form, summary, list);
const errorP = getElement('form p', HTMLParagraphElement);

let state: AppState = { devices: loadDevices() ?? initialDevices, room: '', error: '' };

function render(): void {
  const visible = state.devices.filter((d) => state.room === '' || d.room === state.room);
  list.replaceChildren(...visible.map((d) => createItem(d, brokenDevice, deleteDevice)));
  const brokens = visible.filter((d) => d.broken);
  filter.value = state.room;
  summary.textContent = `Averiados: ${brokens.length} de ${visible.length}`;
  errorP.textContent = state.error;
}

function brokenDevice(id: number): void {
  state = {
    ...state,
    devices: state.devices.map((d) => (d.id === id ? { ...d, broken: !d.broken } : d)),
  };
  saveDevices(state.devices);
  render();
}

function deleteDevice(id: number): void {
  state = {
    ...state,
    devices: state.devices.filter((d) => d.id !== id),
  };
  saveDevices(state.devices);
  render();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const code = String(data.get('code') ?? '')
    .trim()
    .toUpperCase();
  const room = String(data.get('room') ?? '');
  const broken = false;

  const exists = state.devices.some((d) => d.code === code);
  if (code === '') {
    state = { ...state, error: 'Ese código no es válido' };
    render();
    return;
  }

  if (exists) {
    state = { ...state, error: 'Ese código ya existe' };
    render();
    return;
  }

  const newId = Math.max(0, ...state.devices.map((d) => d.id)) + 1;

  state = {
    ...state,
    devices: [...state.devices, { id: newId, code, room, broken }],
    error: '',
  };

  form.reset();
  saveDevices(state.devices);
  render();
});

filter.addEventListener('change', () => {
  const value = filter.value;
  if (value !== '' && !rooms.includes(value)) return;
  state = { ...state, room: value };
  render();
});
render();
