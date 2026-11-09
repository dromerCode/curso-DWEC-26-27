//tipos para mis productos

export interface Product {
  readonly id: number; //el id no cambia nunca
  name: string;
  price: number;
  favorite: boolean; //true si el usuario ha marcado como favorito
}

export interface NewProduct {
  name: string;
  price: number;
}
