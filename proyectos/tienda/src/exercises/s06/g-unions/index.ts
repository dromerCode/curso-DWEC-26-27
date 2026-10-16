// Bloque G · Uniones discriminadas

// G1 · Pedido de comida a domicilio (medio)
// type FoodOrder (etiqueta: state)
//   preparing → restaurant
//   onTheWay  → rider, minutes
//   delivered → at (hora)
//   cancelled → reason
// describeFood(order: FoodOrder): string  (switch sobre order.state + default con never)
// 'Preparando en X' | 'X llega en N min' | 'Entregado a las X' | 'Cancelado: motivo'
// describeFood({ state: 'onTheWay', rider: 'Marta', minutes: 12 })   // 'Marta llega en 12 min'
// describeFood({ state: 'cancelled', reason: 'sin repartidores' })   // 'Cancelado: sin repartidores'


// G2 · Resultado de un login (reto)
export type LoginResult =
  | { ok: true; user: string }
  | { ok: false; reason: 'usuario' | 'contraseña' | 'bloqueado' }

// loginMessage(result: LoginResult): string
// loginMessage({ ok: true, user: 'ana' })           // 'Bienvenido, ana'
// loginMessage({ ok: false, reason: 'contraseña' }) // 'Error: contraseña'
//
// Comprobación: escribe const bad: LoginResult = { ok: true, reason: 'usuario' };
// TypeScript debe dar error. Explica por qué en un comentario y después bórralo.

