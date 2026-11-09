

<ul>
  <li>
    <span> Ratón 19.40 </span>
    <button data-action="favorite" data-id="1"> Favorito </button> //data: es un dataset con el valor que yo quiera
    <button data-action="delete" data-id="1"> Borrar </button>
  </li>
  <li>
    <span> Teclador 29.40 </span>
    <button data-action="favorite" data-id="2"> Favorito </button> //data: es un dataset con el valor que yo quiera
    <button data-action="delete" data-id="2"> Borrar </button>
  </li>
</ul>

//para añadir un data-set a un nodo u objeto del dom usamos objeto.dataset.nombre_del_dataset = "valor_del_dataset"
button.dataset.action = "favorite"
button.dataset.id= "1"

// El listener escucha y colocamos casi siempre en un nodo padre que englobe a todos los hijos que quiera escuchar

const list = document.getElementById("lista-productos")

list.addEventListener("click", (event) => {

})

const button = xxxx.target.('button[data-action]') <=== este seria ell boton pulsado
const id = Number(button.dataset.id)

if(button.dataset.action=== "favorite") {
  dispatch({type: "favorite", id })
}

function dispatch(action: Action): void {
  state = reducer(state, action)
  render()
}
