

export function getElement<T extends Element>(selector: string, type: new () => T): T {

  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra el selector ${selector} o no es el del tipo esperado`)
  }
  return element
}


