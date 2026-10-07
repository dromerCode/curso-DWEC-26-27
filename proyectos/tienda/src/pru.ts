import { products } from "./data/products";

const prices = [10, 20, 30];

const doubles = prices.map((precio) => precio * 2);



console.log(doubles)

// repaso de metodos filter, find, findindex, some, every, includes, indexOf
// indexOf recibe un valor; findIndex recibe una función
console.log(products
  .filter(product => product.stock > 3)
  .map(product => product.name)
  .indexOf('Auriculares'))

console.log(products
  .filter(product => product.stock > 3)
  .map(product => product.name)
  .findIndex(name => name === 'Auriculares'))

console.log(products
  .find(product => product.category === 'peripherals'))


//reduce
console.log(products[0]?.price ?? 'No hay productos')


// si esto de la izquierda es null o undefined ?? entonces devuelve esto
//
// calcular el valor total de todos mis productos (suma de precios*stock)
//
let total: number = 0
for (const p of products) {
  total += p.price * p.stock
}
console.log(total)

// [ ].reduce((Acumulador, Elemento_que_itera, posicion, El_array_de_partida) => , valor_inicial)
//
console.log(products.reduce((totalProductsValue, product) => totalProductsValue + product.price * product.stock, 0))

// sort() <--- ordenar MUTA (malo)
// toSorted() <-----  ordenacion es ascendente
// slice() bueno y slice() malo muta
