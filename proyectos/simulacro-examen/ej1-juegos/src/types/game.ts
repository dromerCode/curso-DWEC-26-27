export interface Game {
  readonly id: number;
  title: string;
  platform: string;
  played: boolean;
}

export interface AppState {
  games: readonly Game[];
  search: string;
}
