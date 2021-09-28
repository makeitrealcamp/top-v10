# Cypress

## Instalacion

### Mejores prácticas
El enfoque recomendado es instalar Cypress con npm porque: Cypress está versionado como cualquier otra dependencia. Simplifica la ejecución de Cypress en integración continua.

```bash
npm i -D cypress
```

### Abriendo Cypress
Si usó npm para instalar, Cypress ahora se ha instalado en su directorio `./node_modules`, con su ejecutable binario accesible desde `./node_modules/.bin`.

Ahora puede abrir Cypress desde la raíz de su proyecto de una de las siguientes maneras:

El camino largo con el camino completo
```bash
./node_modules/.bin/cypress open
```
o con `npx`
```bash
npx cypress open
```

### Agregar `scripts npm`
Si bien no hay nada de malo en escribir la ruta completa al ejecutable de Cypress cada vez, es mucho más fácil y claro agregar comandos de Cypress al campo de scripts en su archivo `package.json`.


```json
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

Ahora puede invocar el comando desde la raíz de su proyecto así:

```bash
npm run cypress:open
```

## Escriba una prueba de cypress básica para asegurarse de que la aplicación no esté completamente rota

```js
describe("my first e2e test", () => {
  it("actually works", () => {
      cy.visit("/");
      cy.contains("Emoji Search");
  });
});
```

## Habilite la finalización de código inteligente para pruebas de cipreses en VSCode

```
/// <reference types="Cypress" />
```

## Utilice la propiedad data-cy para seleccionar elementos en las pruebas de cypress para escribir pruebas e2e más resistentes

podriamos hacer la busqueda por una `clase` pero si cambia tendriamos q actualizar la prueba tambien. Por eso es mejor usa un `data-cy`

En `src/EmojiResultRow.js` agregar

```
data-cy="emoji-row"
```

Cambiar las clases para q se vea


## Agregue una función beforeEach a las pruebas de cypress para evitar copiar y pegar código innecesario

DRY (Don't Repeat Yourself) es (en la mayoría de los casos) una buena idea cuando se trata de programación.

Las pruebas E2E no son diferentes: si tenemos acciones que queremos realizar antes de cada prueba de cypress, sería genial definirlas en un solo lugar.

```js
/// <reference types="Cypress" />

describe("my first e2e test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully renders the page header", () => {
    cy.contains("Emoji Search");
  });

  it("renders the list of emojis", () => {
    cy.get("[data-cy='emoji-row']").should("have.length", 20);
  });
});
```

## Probar una entrada de búsqueda en una prueba e2e con cypress

Para probar una entrada de búsqueda usaremos los comandos de `type` y `clear` de la API de cypress y qué tipo de trucos podemos usar para hacer que nuestras pruebas sean menos frágiles y más resistentes.

En el archivo `src/SearchInput.js` agregar el `data.cy`

```html
<input
  data-cy="emoji-search-input"
  onChange={this.handleChange}
/>
```

test
```js
it("allows users to search for an emoji", () => {
  // cy.get('input).type("joy");
  cy.get("[data-cy='emoji-search-input']").type("joy");
  cy.get("[data-cy='emoji-row']").should("have.length", 3);
  cy.contains("Joy");
  cy.contains("Joy Cat");
  cy.contains("Joystick");

  cy.get("[data-cy='emoji-search-input']")
    .clear()
    .type("cactus");
  cy.get("[data-cy='emoji-row']").should("have.length", 1);
  cy.contains("Cactus");
});
```

## Utilice "Cypress Driven Development" para agregar una función a una aplicación React

"Seguro han oído hablar de TDD, ahora es el momento de Cypress Driven Development"

Dejando a un lado las bromas, a veces puede ser beneficioso implementar pruebas de Cypress para una característica determinada antes de comenzar a implementarla.

Usando una prueba de Cypress, podemos expresar la funcionalidad que nos gustaría tener en nuestra aplicación y, después de implementarla, sabremos si funciona exactamente como se espera.

La idea en este punto es implementar la pantall de 'resultados no encontrados' en una aplicación de búsqueda de Emoji escribiendo primero una prueba de Cypress y luego la implementación.

Cypress nos permite tener un ciclo de retroalimentación muy rápido que hace que implementar funciones como esta sea mucho más simple.


```js
it('shows a "emoji not found" message', () => {
  cy.get("[data-cy='emoji-search-input']").type(
    "emoji that does not exist"
  );
  cy.get("[data-cy='emoji-row']").should("have.length", 0);
  cy.contains("Emojis not found");
  cy.contains("Try searching for something else");
});
```

en `src/EmojiResults.css` agregar el siguiente estilo:

```css
.emoji-not-found {
  width: 100%;
  text-align: center;
  color: #222;
}
```

En `src/EmojiResults.js` agregar los siguientes fragmentos de codigo:

```jsx
const EmojiNotFound = () => {
  return (
    <div className="emoji-not-found">
      <h1>Emojis not found</h1>
      <p>Try searching for something else</p>
    </div>
  );
};


render() {
  const { emojiData } = this.props;
  return (
    <div className="component-emoji-results">
      {emojiData.length > 0 ? (
        emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))
      ) : (
        <EmojiNotFound />
      )}
    </div>
  );
}
```

## Utilice cy.only para ejecutar solo una prueba en un conjunto de pruebas de cypress

Usar `.only` en cypress suite para ejecutar solo una prueba que hemos elegido.

```js
 it("is a very long test", () => {
    cy.wait(10000);
  });

  it.only("allows users to search for an emoji", () => {
```

## Utilice cy.skip para omitir una prueba en una suite de Cypress

Usar `.skip` para omitir (temporalmente) una prueba de Cypress.

```js
 it.skip("is a very long test", () => {
    cy.wait(10000);
  });

```

## Cambiar el ancho y la altura de una ventana gráfica en una prueba de Cypress

```js
beforeEach(() => {
  cy.visit("/");

  // cy.viewport(width, height)
  // cy.viewport(preset, orientation)
  // cy.viewport(width, height, options)
  // cy.viewport(preset, orientation, options)

  cy.viewport("iphone-x");
});
```

y en el `cypress.json`

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1920,
  "viewportHeight": 1080
}
```
