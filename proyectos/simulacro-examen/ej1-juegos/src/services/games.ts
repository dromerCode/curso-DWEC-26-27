import type { Game } from '../types/game';

export const initialGames: readonly Game[] = [
  { id: 1, title: 'Hollow Knight', platform: 'PC', played: true },
  { id: 2, title: 'Mario Kart 8', platform: 'Switch', played: true },
  { id: 3, title: 'Celeste', platform: 'PC', played: false },
  { id: 4, title: 'Zelda: Tears of the Kingdom', platform: 'Switch', played: false },
  { id: 5, title: 'Stardew Valley', platform: 'PC', played: false },
];
