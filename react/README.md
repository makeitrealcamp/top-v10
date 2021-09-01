# React

## REST

### Web Services

 * Una sola URL (/webservices)
 * Siempre GET
 * XML (Con la información de lo que se quería hacer)

<WebService>
  <Action>listarTodos</Action>
</WebServce>


### RESTFul (Utiliza la semántica del protocolo HTTP)

 * Se utilizan varias URL's (recursos)
 * Se utilizan los métodos (verbos) HTTP (GET, POST, PATCH (PUT), DELETE)
 * JSON (JavaScript Object Notation) O XML

GET /foundations
GET /foundations/:id
POST /foundations - Crear una fundación
PATCH /foundations/:id - Editar una fundación
DELETE /foundations/:id - Eliminar una fundación

### GraphQL (Facebook)

 * Una sola URL (/graphql)
 * Sólo se utiliza POST
 * JSON ()

## Recursos

* [Sass y Styled Components](https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application/)
* [React Router Example](https://codesandbox.io/s/react-router-example-sugfp)
* [React CRUD Example](https://codesandbox.io/s/manejo-del-estado-en-react-forked-248d1?file=/src/App.js)
