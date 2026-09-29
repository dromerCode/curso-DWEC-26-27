const stock: Record<string, number> = {
  teclados: 12,
  ratones: 0,
  monitores: 5,
  cables: 8
}

function resumenStock(stock: Record<string, number>): {
  total: number
  sinStock: number
} 

{
  let total: number = 0
  let sinStock: number = 0
  for (const producto in stock){
    if (Object.hasOwn(stock, producto)) {
      total+=stock[producto]
      sinStock+=(stock[producto] === 0) ? 1 : 0
    }
  }
  return { total: total, sinStock: sinStock }
}

export function ejercicio03(): void {
  console.log(resumenStock(stock))
  console.log(resumenStock({}))
  console.log(resumenStock({ a: 0, b: 0 }))
}
