import type { Device } from '../types/device';

export const initialDevices: readonly Device[] = [
  { id: 1, code: 'PC-01', room: 'A12', broken: false },
  { id: 2, code: 'PC-02', room: 'A12', broken: true },
  { id: 3, code: 'PC-03', room: 'A12', broken: false },
  { id: 4, code: 'PROY-01', room: 'A12', broken: false },
  { id: 5, code: 'PC-10', room: 'B04', broken: true },
  { id: 6, code: 'PC-11', room: 'B04', broken: false },
];

export const rooms = ['A12', 'B04'];
