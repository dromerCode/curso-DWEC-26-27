/*
 *
 * DOM es un arbol de objetos construidos con html
 *
 * <html>
 *
 * <body>
 *  <h1> Tienda </h1>
 *  <div id="category">
 *    <input id = "search" type"search" />
 *    <ul id "list"></ul>
 *  </div>
 * </body>
 * </html>
 *
 * document
 *    body
 *        h1
 *        div#category
 *            input#search
 *            ul#list
 *
 * Node -> Todos los elementos del dom se denominan NODOS (node)
 *  Element -> Cualquier etiqueta
 *    HTMLElement -> textContent, classList, dataset, etc
 *      HTMLInputElement -> .value, .checked, etc
 *      HTMLButtonElement -> .disabled
 *
 * ¿Como se seleccionan los elementos del DOM?
 * document.querySelector("#category") <- método para seleccionar por id o class
 *      mucho cuidado que ese query puede devolver null | Element
 *
 * ¿Cómo se tipa en typescript?
 * de peor forma a mejor forma
 *
 * const search = document.querySelector("#search")! as HTMLInputElement;
 * ! <- La exclamacion dice "no te preocupes lo juro por snoopy que no es null"
 * es decir ! quita null de los posibles valores y me dice que te garantizo que existe
 *
 * const search2 = document.querySelector<HTMLInputElement>("#search")
 *  Un poco mejor pero sigo sin comprobar en ningún momento si es null o un HTMLInputElement
 *
 * La forma correcta es:
 *
 * const searchInput = document.querySelector("#search")
 * if(!(searchInput instanceof HTMLInputElement)) {
 *  // te lanzo un error o te redirecciono a los errores
 *  throw new Error("No se encuentra la etiqueta search o no es un input")
 * }
 * console.log(searchInput.value) //Mostraria por pantalla lo que ha escrito en el input
 */

//seleccion de los elementos del dom
//
