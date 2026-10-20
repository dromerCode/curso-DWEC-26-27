// Bloque E · Closures: funciones con memoria

// E1 · Turnos de la carnicería (básico)
// createTurnDispenser(letter: string): () => string
// const turnA = createTurnDispenser('A')
// const turnB = createTurnDispenser('B')
// turnA() // 'A-001'
// turnA() // 'A-002'
// turnB() // 'B-001'
// turnA() // 'A-003'
export function createTurnDispenser(letter: string): () => string {
  let count = 0
  function nextTurn(): string {
    count++
    return `${letter}-${String(count).padStart(3, '0')}`
  }
  return nextTurn
}

const turnA = createTurnDispenser('A')
const turnB = createTurnDispenser('B')
console.log(turnA()) // A-001
console.log(turnA()) // A-002
console.log(turnB()) // B-001
console.log(turnA()) // A-003

// E2 · Semáforo (medio)
// type Light = 'rojo' | 'verde' | 'ámbar'
// interface TrafficLight { current: () => Light; next: () => Light }
// createTrafficLight(): TrafficLight
// const light = createTrafficLight()
// light.current() // 'rojo'
// light.next()    // 'verde'
// light.next()    // 'ámbar'
// light.next()    // 'rojo'
type Light = 'rojo' | 'verde' | 'ámbar'
interface TrafficLight { current: () => Light; next: () => Light }

export function createTrafficLight(): TrafficLight {
  const color: Light[] = ['rojo', 'verde', 'ámbar']
  let position: number = 0
  function next(): Light {
    position++
    if (position === 3) {
      position = 0
    }
    return color[position]
  }

  function current(): Light {
    return color[position]
  }
  return { current, next }
}

const light = createTrafficLight()
console.log(light.current()) // rojo
console.log(light.next())    // verde
console.log(light.next())    // ámbar
console.log(light.next())    // rojo
// E3 · Contraseña con intentos (reto)
// type LoginAnswer = 'correcta' | 'incorrecta' | 'bloqueada'
// createPasswordCheck(password: string, maxAttempts: number): (attempt: string) => LoginAnswer
// const check = createPasswordCheck('1234', 3)
// check('0000') // 'incorrecta'
// check('1111') // 'incorrecta'
// check('1234') // 'correcta'  ← los fallos vuelven a 0
// check('a')    // 'incorrecta'
// check('b')    // 'incorrecta'
// check('c')    // 'bloqueada'
// check('1234') // 'bloqueada'  ← ya no entra ni con la buena
type LoginAnswer = 'correcta' | 'incorrecta' | 'bloqueada'

export function createPasswordCheck(password: string, maxAttempts: number): (attempt: string) => LoginAnswer {
  let fails: number = 0
  function checkFails(attempt: string): LoginAnswer {
    if (fails >= maxAttempts) {
      return 'bloqueada'
    } else if (password === attempt) {
      fails = 0
      return 'correcta'
    } else {
      fails++
      if (fails >= maxAttempts) {
        return 'bloqueada'
      }
      return 'incorrecta'
    }
  }
  return checkFails
}

const check = createPasswordCheck("1234", 3)
console.log(check('0000')) // incorrecta
console.log(check('1111')) // incorrecta
console.log(check('1234')) // correcta
console.log(check('a'))    // incorrecta
console.log(check('b'))    // incorrecta
console.log(check('c'))    // bloqueada
console.log(check('1234')) // bloqueada

