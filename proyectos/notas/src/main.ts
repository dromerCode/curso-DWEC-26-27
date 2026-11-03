import { getElement, createTag } from "./components/dom";

// const title = getElement("h1", HTMLHeadingElement)

const h1Product = createTag("h1", "Product", ["h1Product"])

const divProducts = getElement("#products", HTMLDivElement)
divProducts.append(
  createTag("p", "Soy un párrafo", ["rojo", "grande"]),
  createTag("h2", "Soy un subtítulo", []),
  h1Product
)

let clicks = 0
const btn = createTag("button", "Púlsame", [])
const contador = createTag("p", "Clicks: 0", [])
const reset = createTag("button", "Reiniciar", [])

divProducts.append(btn, contador, reset)

btn.addEventListener("click", () => {
  clicks++;
  contador.textContent = `Clicks: ${clicks}`
})

reset.addEventListener("click", () => {
  clicks = 0
  contador.textContent = `Clicks: ${clicks}`
})
