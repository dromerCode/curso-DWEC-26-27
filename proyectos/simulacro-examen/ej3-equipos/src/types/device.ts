export interface Device {
  readonly id: number;
  code: string; // etiqueta del equipo, por ejemplo "PC-01"
  room: string;
  broken: boolean; // true si está averiado
}

export interface AppState {
  devices: readonly Device[];
  room: string;
  error: string;
}
