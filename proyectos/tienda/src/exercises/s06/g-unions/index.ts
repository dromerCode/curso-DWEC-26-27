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
export type FoodOrder =
  { state: 'preparing'; restaurant: string }
  | { state: 'onTheWay'; rider: string, minutes: number }
  | { state: 'delivered'; at: string }
  | { state: 'cancelled'; reason: string }

export function describeFood(order: FoodOrder): string {
  switch (order.state) {
    case 'preparing':
      return `Preparando en ${order.restaurant}`
    case 'onTheWay':
      return `${order.rider} llega en ${order.minutes} min`
    case 'delivered':
      return `Entregado a las ${order.at}`
    case 'cancelled':
      return `Cancelado: ${order.reason}`
    default: {
      const unreachable: never = order
      return unreachable
    }
  }
}


// G2 · Resultado de un login (reto)
// loginMessage(result: LoginResult): string
// loginMessage({ ok: true, user: 'ana' })           // 'Bienvenido, ana'
// loginMessage({ ok: false, reason: 'contraseña' }) // 'Error: contraseña'
//
// Comprobación: escribe const bad: LoginResult = { ok: true, reason: 'usuario' };
// TypeScript debe dar error. Explica por qué en un comentario y después bórralo.
export type LoginResult =
  | { ok: true; user: string }
  | { ok: false; reason: 'usuario' | 'contraseña' | 'bloqueado' }

export function loginMessage(result: LoginResult): string {
  if (result.ok) {
    return `Bienvenido, ${result.user}`
  }
  return `Error: ${result.reason}`
}

// const bad: LoginResult = { ok: true, reason: 'usuario' }
// Da error porque con ok: true, TypeScript usa el caso que lleva una user, y ese caso no tiene una razón
