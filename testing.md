# Testing (pruebas automatizadas)

Existen dos tipos de pruebas:

**Pruebas unitarias:** se escriben para probar la lógica de métodos específicos de la aplicación, aislando sistemas externos como bases de datos, otros servidores, etc.

**Pruebas de integración:** se escriben para probar funcionalidades completas de la aplicación y pueden involucrar componentes y sistemas externos como navegadores, bases de datos, frameworks, etc.

**Test Driven Development (TDD):** primero se escribe una prueba fallida, después se implementa el código para que funcione y, por último, se mejora el código verificando que la prueba siga pasando. 

Se utiliza un **testing framework** como [Jest](https://jestjs.io/). Todos los archivos que terminen en `.test.js`, `.spec.js` o que estén en la carpeta `__tests__` son tomados como pruebas:

1. Instalar la librería
2. Configurar el script en el `package.json`.

```js
describe('function, object, class, a route, etc', function() {
  test('a feature', function() {
    // preparación (opcional)

    // ejecuta lo que se va a probar 

    // validaciones
    expect(2+2).toBe(4) // assertion (matchers)
  })
})
```

Para correr las pruebas se ejecuta el comando `jest`.

### Setup y teardown

Se utilizan los métodos: `beforeAll`, `afterAll`, `beforeEach`, `afterEach`.

### Pruebas de código asincrónico

Se puede pasar un argumento `done`, que es una función que se invoca cuando se termina de probar el código, o se puede retornar una promesa.

```js
test('async code (callbacks)', function(done) {
  setTimeout(function() {
    done()
  }, 5000)
})

test('async code (promises)', async function() {
  await new Promise(resolve => {
    setTimeout(function() {
      resolve()
    }, 5000)
  })
  
  expect(3+1).toBe(4)
})
```

Para las verificaciones se utilizan **matchers** como `toBe`, `toEqual`, `toBeNull`, etc. Para ver la lista completa [consultar este recurso](https://jestjs.io/docs/using-matchers).

## Pruebas del backend

Instalar `supertest`:

```
npm install jest supertest --save-dev
```

```js
describe('GET /test', () => {
  test('responds 200 OK', async () => {
    const response = await request(app).get('/test')
    expect(response.statusCode).toBe(200)
  })

  test('responds with correct JSON', async () => {
    const response = await request(app).get('/test')
    expect(response.body).toEqual({ status: "ok" })
  })
})
```

## Pruebas del frontend

Se utiliza una librería llamada [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Ya viene instalada en Create React App.

La idea es renderizar un componente y hacer validaciones sobre el DOM generado. Sin embargo, si estamos utilizando React Router, React Redux o alguna otra librería, es posible que tengamos que hacer configuraciones adicionales para escribir y ejecutar las pruebas.

1. React Router: cambiar `history.js` para que retorne un **fake** cuando estamos en pruebas.
2. React Redux: Refactorizar `store.js` para que retorne una función que cree el `store`. Llamar la función desde el `index.js` o desde donde se esté configurando el `Provider` de Redux.
3. Crear una `beforeEach` que limpie el localStorage y que cree el store. Se puede hacer desde `setupTests.js`.

```js
let store;
beforeEach(() => {
  localStorage.clear()
  store = createStore()
})

test('renders register component', () => {
  history.push('/register')
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
});
```

Ejemplos completos se pueden encontrar en [este enlace](https://github.com/germanescobar/tasks-frontend/tree/main/src/tests).

Para encontrar elementos en el DOM resultante y verificarlos se puede utilizar el rol (atributo `role`), por el texto del label (para campos de entrada), por el texto del placeholder, por el texto del componente, por el display value (el valor de un campo de entrada), por el atributo `alt`, por el título (atributo `title`) y por un atributo llamado `data-testid`.

**Nota:** React Testing Library (RTL) no recomienda seleccionar por selector CSS. Sin embargo, en mi opinión, eso dificulta la escritura de ciertas pruebas. En [esta pregunta de StackOverflow](https://stackoverflow.com/questions/54234515/get-by-html-element-with-react-testing-library) discuten brevemente el tema.

Para conocer más sobre este tema y la lista de métodos completos [consultar este recurso](https://testing-library.com/docs/queries/about).

React Testing Library (RTL) incluye unos **matchers** adicionales para Jest como `toBeDisabled`, `toHaveTextContent`, `toHaveClass`, `toBeChecked`, `toBeInTheDocument`, etc. que puedes encontrar en [este recurso](https://github.com/testing-library/jest-dom).

### Simular llamados HTTP al backend

Para simular los llamados al backend se puede mockear Axios con Jest o utilizar alguna solución más robusta como [Mock Service Worker]().

Ejemplo con el mock de Axios:

```js
// ... más imports
import axios from './axios'

jest.mock('./axios')

test('renders root if authenticated', async () => {
  axios.get.mockResolvedValueOnce({ data: { email: "test@example.com", fistName: "Pedro", lastName: "Perez" } })
  axios.get.mockResolvedValueOnce({ data: { count: 1, page: 1, data: [{ title: "A", completed: false, id: "1234"}] } })

  localStorage.setItem(TOKEN, "123355")
  history.push('/')

  render(<Provider store={store}><App /></Provider>);
  await waitFor(() => expect(screen.queryAllByTestId("task-item")).toHaveLength(1))

  expect(screen.getByText(/Lista de Tareas/i)).toBeInTheDocument()
})

test('allows user to login', async () => {
  axios.post.mockResolvedValueOnce({ data: {
    token: "jdjdjdjd",
    user: {
      email: "test@example.com",
      fistName: "Pedro",
      lastName: "Perez"
    }}
  });

  history.push('/login')

  render(<Provider store={store}><Login /></Provider>);

  await waitFor(() => screen.getByText(/Login/i))
  fireEvent.change(screen.getByTestId('email'), { target: { name: "email", value: "test@example.com" }})
  fireEvent.change(screen.getByTestId('password'), { target: { name: "password", value: "test1234" }})

  const spy = jest.spyOn(history, 'push')
  fireEvent.submit(screen.getByTestId("form"))

  await waitFor(() => expect(spy).toHaveBeenCalledWith("/"))
})
```

Para ver todas las opciones que nos ofrece Jest para mocks consultar [este recurso](https://jestjs.io/docs/mock-function-api).

### Disparando eventos

Para disparar eventos se utiliza el objeto `fireEvent` de RTL que expone métodos para disparar los eventos como `change`, `click`, `submit`, `focus`, `blur`, `keyPress`, etc. Como primer elemento se le pasa como argumento el elemento sobre el que se quiere disparar el evento. Como segundo argumento se le pasa un **fake** del **evento**.

```js


fireEvent.change(screen.getByTestId('email'), { target: { name: "email", value: "test@example.com" }})
fireEvent.submit(screen.getByTestId("form"))
fireEvent.click(screen.getByTestId("link"))
fireEvent.keyDown(screen.getByTestId("text"), { key: 'Enter', code: 'Enter' })
fireEvent.keyDown(screen.getByTestId("text"), {key: 'A', code: 'KeyA'})
```

Puedes encontrar todos los códigos de teclas en https://keycode.info/.

## Recursos

* [Guías de Make It Real - Testing](https://guias.makeitreal.camp/javascript-ii/testing)
* [Testing NodeJs/Express API with Jest and Supertest](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)
* [Guías de Make It Real - Express Testing](https://guias.makeitreal.camp/express.js-ii/testing)