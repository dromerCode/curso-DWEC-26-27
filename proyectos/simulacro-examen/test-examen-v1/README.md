# Test de examen · v1: estado y DOM sin persistencia

Aplicación de productos con TypeScript y Vite. Permite buscar, añadir, borrar y marcar favoritos. Todos los cambios viven en memoria: al recargar se recuperan los cuatro productos iniciales y se vacía la búsqueda. No se lee ni se escribe almacenamiento del navegador.

## Ejecutar

```bash
npm ci
npm run dev
```

Abrir la dirección indicada por Vite. Para comprobar tipos y generar la aplicación: `npm run build`. Ejecutar los comandos dentro de esta carpeta. El build no sustituye una prueba de interacción.

## La receta de los seis pasos

| Paso | Archivo | Responsabilidad |
| --- | --- | --- |
| 1. Tipos | `src/types/product.ts` | Define `Product` y `AppState`. |
| 2. Datos | `src/services/products.ts` | Contiene los cuatro productos iniciales. |
| 3. Componentes | `src/components/dom.ts` | Construye elementos y recibe callbacks. |
| 4. Estado | `src/main.ts` | Conserva productos y búsqueda durante la ejecución. |
| 5. Renderizado | `src/main.ts`, `render()` | Calcula la lista visible y actualiza lista y contador. |
| 6. Eventos | `src/main.ts` | Lee la interacción, cambia el estado y llama a `render()`. |

Leer los archivos en ese orden. El montaje crea buscador, formulario, contador y lista una sola vez. Cada renderizado reemplaza únicamente los hijos de la lista y actualiza el contador. Así escribir en el buscador no destruye el input ni pierde su foco.

### 1. Tipos: describir los datos

`Product` describe un producto; `AppState` reúne la lista completa y el texto de búsqueda. `import type` importa solo tipos. TypeScript comprueba el código al compilar, pero no valida por sí mismo datos introducidos por una persona.

`readonly Product[]` impide operaciones como `push` sobre ese array a través de esa referencia. No congela objetos en ejecución ni hace inmutables todas sus propiedades. La disciplina de las acciones es crear arrays nuevos y copiar el producto que cambia.

### 2. Datos y estado: dos papeles distintos

`initialProducts` es el punto de partida. `state` es la situación actual. Declaramos `let state` porque lo sustituimos tras cada acción. Inicialmente comparten la referencia al array; las acciones no lo modifican, por lo que los datos de partida se conservan.

El formulario conserva temporalmente sus valores en el DOM. Este ejemplo no es un formulario controlado: solo al enviarlo se incorporan los datos válidos a `state`. Por eso «todo lo que cambia está en el estado» es una simplificación, no una regla literal para todo el navegador.

### 3. Componentes y callbacks

`createProductItem` recibe un producto y dos funciones. Crea un `<li>` y conecta sus botones. No decide cómo borrar: al pulsar llama a `onDelete(product.id)`. `main.ts` recibe ese aviso y decide el nuevo estado.

La función flecha del listener conserva acceso al producto mediante una closure. Pasar `onDelete(product.id)` directamente a `addEventListener` lo ejecutaría al construir el elemento, en lugar de esperar al clic.

`getElement` comprueba en ejecución que `#app` existe y es un `HTMLDivElement`; el genérico permite conservar ese tipo al devolverlo.

### 4. Cambiar el estado sin modificar el anterior

```ts
state = { ...state, products: state.products.filter((p) => p.id !== id) };
render();
```

`...state` copia superficialmente las propiedades existentes; `products` sobrescribe la lista. `filter` devuelve un array nuevo con todos los productos salvo el borrado. Copiar el estado conserva la búsqueda actual.

Para favoritos, `map` devuelve un array nuevo; solo el producto correspondiente se copia con `{ ...p, favorite: !p.favorite }`. Para añadir, `[...state.products, nuevoProducto]` crea otro array.

El identificador es el máximo actual más uno. Es suficiente para distinguir los productos presentes en este ejercicio; puede reutilizar identificadores eliminados. No es una estrategia de identidad global para una base de datos.

### 5. Renderizar: derivar, no duplicar

`trim().toLowerCase()` normaliza la búsqueda. `filter` calcula los productos visibles y `map` los convierte en elementos. `replaceChildren(...items)` sustituye el contenido de la lista. El contador compara visibles con totales.

No guardamos `visible` en el estado: se puede calcular a partir de productos y búsqueda. Así no hay una segunda lista que mantener sincronizada. `render()` modifica el DOM, pero no cambia `state`.

### 6. Eventos y formulario

El evento `input` actualiza `state.search` y renderiza. El evento `submit` impide la navegación con `preventDefault()`, lee los controles mediante `FormData` y los atributos `name`, convierte el precio a número y valida antes de añadir.

`required`, `min` y `step` aportan validación del navegador. `Number.isFinite` rechaza valores numéricos no finitos. Atención: `Number("")` y `Number(null)` producen `0`; la validación actual depende también del formulario para impedir un precio vacío en el uso normal. Para una frontera de datos reutilizable habría que validar el texto antes de convertirlo.

Después se actualiza el estado, se limpia el formulario con `reset()` y se renderiza. La regla útil es: la lista y el contador se derivan del estado. Limpiar el formulario es una actuación explícita sobre el DOM y no contradice esa regla.

## Recorrido sugerido de clase

1. Mostrar solo tipos, datos y lista inicial.
2. Explicar estado y renderizado siguiendo un producto hasta su `<li>`.
3. Añadir búsqueda: `input → estado → filter → render`.
4. Añadir borrado: callback, identificador y `filter`.
5. Añadir favorito: `map`, copia del objeto y negación booleana.
6. Añadir formulario: evento, lectura, conversión y validación.
7. Recargar y observar la pérdida de cambios. Ese problema introduce la v2.

No presentar los seis archivos/conceptos como un bloque para memorizar. Pedir primero que anticipen el resultado de una acción y después que expliquen qué línea lo provoca.

## Comprobación manual y preguntas

- Al arrancar: cuatro productos y contador «Mostrando 4 de 4».
- Buscar ` MONITOR `: dos resultados; buscar un texto inexistente: cero.
- Borrar con una búsqueda activa: se mantiene la búsqueda y cambia el total.
- Cambiar una estrella: solo cambia el producto elegido.
- Añadir `Cable`, precio `0`: se admite. Un nombre de espacios se rechaza; precio negativo o vacío queda impedido por el formulario.
- Añadir con una búsqueda activa puede dejar el producto oculto si su nombre no coincide: es el comportamiento esperado.
- Borrar todos y añadir: vuelve a existir un producto con identificador 1.
- Recargar: reaparecen los datos iniciales. Esa pérdida es intencionada.

Preguntas: ¿por qué no filtramos y sobrescribimos `state.products` al buscar? ¿Qué conserva `...state`? ¿Por qué `render` no llama a las acciones? ¿Qué diferencia hay entre `map` y `filter`?

## Continuar con la v2

Leer [la guía de la v2](../test-examen-v2/README.md): mantiene el mismo modelo de estado y añade carga y guardado. Primero comprender el ciclo de esta versión; después introducir JSON, almacenamiento y validación de datos externos.
