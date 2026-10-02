// Enunciado: Ejercicio uso de arrays y tipado
// Autor: Daniel Romero
// Investigación: Fuentes consultadas
// Como tipabamos un array
const activos: boolean[] = [true, false, true, true]
const nombres: string[] = ["pepe", "luis", "carlos"]
//nueva forma:
const edades: Array<number> = [12, 22, 18]
const precios = [65, 34, 23]
console.log(typeof precios)
// arrays con más de un tipo
const valores: (string | number)[] = ["Ana", 25, "Luis", 56]
// como pero para empezar mejor no
const persona: [string, number] = ["Ana", 45]
//leer elementos en un array

console.log(nombres[0])
nombres[0] = "Don pepe"
// insertar y eliminar en ultimo lugar y al comienzo del array
// El metodo push muta el contenido del array (modificar el contenido del mismo algo prohibido en react)
nombres.push("Sara")
// Eliminamos el ultimo elemento de un array
console.log(nombres.pop())
//añadir al comienzo del array
nombres.unshift("Pedro")
// Eliminar del comienzo del array
//
nombres.shift()

// Metodos que mutan y no mutan un array
//
// push(),pop(),shift(),unshift(),splice(),sort(),reverse()
//
// metodo slice() <= Devuelve una parte del array sin mutar el array *****
//
const numeros: number[] = [10, 23, 21, 56, 32]
const parte: Array<number> = numeros.slice(1, 4) //[23,21,56] <= incluye la posicion inicial pero no la final

//metodo splice <-- eliminar, añadir o sustituir los elementos del array
console.log(numeros.splice(1, 2))

// Copiar arrays: spread operator
//
const num: number[] = [1, 2, 3]
const copia: number[] = [...num]
const copia2: number[] = [...num, 6]

// Recorrer un array:
//
for (let i = 0; i < num.length; i++) {
  console.log(num[i])
}
//
// for of cuando solo queremos el valor

for (const precio of precios) {
  console.log(precio)
}

//forEach se usa mucho en react
//
precios.forEach((precio, indice) => {
  console.log(`Precio al cuadrado ${precio ** 2} - Posicion: ${indice}`)
})

// metodos que usan funciones callback
//
// forEach(), map(), filter(), find()
// Un callback es una funcion por tanto esos metodos reciben como parametro una funcion



