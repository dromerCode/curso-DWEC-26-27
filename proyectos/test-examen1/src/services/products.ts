import type { Product } from '../types/product';

export const products: readonly Product[] = [
  { id: 1, name: 'Teclado mecánico', price: 80, favorite: true },
  { id: 2, name: 'Ratón inalámbrico', price: 25, favorite: false },
  { id: 3, name: 'Monitor 27"', price: 220, favorite: false },
  { id: 4, name: 'Auriculares', price: 60, favorite: true },
];
