

// Fabriquemos una funcion que pueda generar otras


//1. Tipemos una funcion : type nombre_funcion = (parámetros typados) => Tipo_Valor_devuelto

type NumberCheck = (n: number) => boolean


function greaterThan(limit: number): NumberCheck {
  function check(n: number): boolean {
    return n > limit
  }
  return check
}

const greaterThan10 = greaterThan(10)
const greaterThan20 = greaterThan(20)
const greaterThan30 = greaterThan(30)

console.log(greaterThan10(40))
console.log(greaterThan20(15))
console.log(greaterThan30(31))

const nums = [1, 2, -2, 6, -3]

const greaterThan3 = greaterThan(3)
console.log(nums.filter(greaterThan3))

//Crear una funcion fabrica que le pase 2 valores y genere verdadero o falso si el valor pedido esta entre esos dos valores sin incluir
//
//between10and20 -> createBetween(10,20)

function createBetween(min: number, max: number): NumberCheck {
  function check(n: number): boolean {
    return (min < n && n < max)
  }
  return check
}

const between10and20 = createBetween(10, 20)
console.log(between10and20(2))
