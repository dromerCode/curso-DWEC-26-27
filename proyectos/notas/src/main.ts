import { getElement } from "./components/dom";

// const title = getElement("h1", HTMLHeadingElement)

const h1Product = document.createElement("h1")
h1Product.classList.add("h1Product")
h1Product.textContent = "Product"
const divProducts = getElement("#products", HTMLDivElement)

divProducts.append(h1Product)
