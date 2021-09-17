# Testing (pruebas automatizadas)

Existen dos tipos de pruebas:

**Pruebas unitarias:** se escriben para probar la lógica de métodos específicos de la aplicación, aislando sistemas externos como bases de datos, otros servidores, etc.

**Pruebas de integración:** se escriben para probar funcionalidades completas de la aplicación y pueden involucrar componentes y sistemas externos como navegadores, bases de datos, frameworks, etc.

**Test Driven Development (TDD):** primero se escribe una prueba fallida, después se implementa el código para que funcione y, por último, se mejora el código verificando que la prueba siga pasando. 

Se utiliza un **testing framework** como [Jest](https://jestjs.io/). Todos los archivos que terminen en `.test.js`, `.spec.js` o que estén en la carpeta `__tests__` son tomados como pruebas:

1. Instalar la librería
2. Configurar el script.

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

## Recursos

* [Guías de Make It Real - Testing](https://guias.makeitreal.camp/javascript-ii/testing)
* [Testing NodeJs/Express API with Jest and Supertest](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)