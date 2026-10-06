
// un tipo describe la forma de un dato
export type Category = 'monitors' | 'audio' | 'GPU' | 'peripherals';

// una interface es como un contrato con los valores que debe tener y el tipo. TypeScript firma el contrato.. y si se rompe .. se queja
// Los elementos de una interface van separados por ; o enter
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  stock: number;
}
