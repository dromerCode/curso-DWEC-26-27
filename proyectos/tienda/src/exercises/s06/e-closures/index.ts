// Bloque E · Closures: funciones con memoria

// E1 · Turnos de la carnicería (básico)
// createTurnDispenser(letter: string): () => string
// const turnA = createTurnDispenser('A')
// const turnB = createTurnDispenser('B')
// turnA() // 'A-001'
// turnA() // 'A-002'
// turnB() // 'B-001'
// turnA() // 'A-003'


// E2 · Semáforo (medio)
// type Light = 'rojo' | 'verde' | 'ámbar'
// interface TrafficLight { current: () => Light; next: () => Light }
// createTrafficLight(): TrafficLight
// const light = createTrafficLight()
// light.current() // 'rojo'
// light.next()    // 'verde'
// light.next()    // 'ámbar'
// light.next()    // 'rojo'


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

