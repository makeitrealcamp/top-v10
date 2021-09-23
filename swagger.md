# Cómo documentar una API Express con Swagger UI y JSDoc

[JSDoc](https://jsdoc.app/) es una herramienta popular para generar documentación a partir de comentarios en el código fuente de su aplicación. Esto tiene dos propósitos. Primero, la documentación está directamente disponible para cualquiera que vea el código fuente. En segundo lugar, los comentarios se pueden compilar posteriormente en un conjunto completo de documentación de referencia.

[Swagger](https://swagger.io/) proporciona una herramienta para presentar esta documentación: [Swagger UI](https://swagger.io/tools/swagger-ui/). La interfaz de usuario de Swagger crea una página web a partir de las definiciones de la [especificación OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md). Como mostrará este tutorial, estas definiciones se pueden escribir en YAML directamente en los comentarios JSDoc.

## Terminologia

OpenAPI es el nombre de la especificación, mientras que Swagger es el conjunto de herramientas que implementan esta especificación. Consulte [¿Cuál es la diferencia entre Swagger y OpenAPI?](https://swagger.io/blog/api-strategy/difference-between-swagger-and-openapi/)

Este tutorial utiliza los siguientes términos y definiciones relacionados con la API definidos por OpenAPI:

![Screen Shot 2021-09-22 at 11.44.33 AM.png](https://ginger-cheese-954.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa4a4a169-b266-46c1-a2f6-3cd6e36388a1%2FScreen_Shot_2021-09-22_at_11.44.33_AM.png?table=block&id=2ba9e37b-5551-48d3-bc8c-ff9f7b44c7c5&spaceId=cfce52b7-e0d5-4dbb-b152-95ab4a106956&width=2560&userId=&cache=v2)

- **Server URL or base URL**: La base de todos los endpoints: `localhost:3000` or `example.com/api`
- **Endpoint path**: La ruta que representa la ubicación del recurso (relativa a la URL base): `/users` or `/users/1`
- **Operation**: El método HTTP utilizado para manipular las rutas de los puntos finales: GET, POST, PUT, DELETE
- **Resource**: Información que representa un objeto del mundo real (por ejemplo, un usuario o un libro), generalmente devuelto por la API como datos JSON. Representado por un **modelo** de base de datos en Express.

## Step 1: Configura la aplicación

### 1.1: Instalar `swagger-jsdoc` y `swagger-ui-express`

Para crear una página de IU de Swagger a partir de los comentarios de JSDoc, necesitará una forma de pasar su documentación a la IU de Swagger:

- `[swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)` genera definiciones de OpenAPI a partir de comentarios JSDoc.
- `[swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)` creates the Swagger UI page from thecrea la página de la interfaz de usuario de Swagger a partir de estas definiciones.


```
npm install swagger-jsdoc@5.0.1 --save-exact
npm install swagger-ui-express --save
```

### 1.2: Create an API specification

La interfaz de usuario de Swagger crea una página de documentos a partir de un conjunto de definiciones de OpenAPI. Estas definiciones están escritas en [YAML](https://yaml.org/) o [JSON](https://www.json.org/json-en.html) para describir una API REST. Para obtener más información sobre la estructura básica de la especificación OpenAPI, consulte [Estructura básica](https://swagger.io/docs/specification/basic-structure/).

`app.js` file

```jsx
// app.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
```

El objecto `swaggerDefinition` (es decir, la definición de OpenAPI) define la información raíz de su API. Proporcione algunos datos básicos a `swaggerDefinition`, como el `title` y `version` de la API.

El objeto de opciones contiene este objeto `swaggerDefinition` y una matriz de rutas llamadas apis. Estas son rutas a archivos que contienen otras definiciones de OpenAPI. Estas rutas de archivo deben ser relativas al directorio raíz de su API Express. En nuestro caso, las definiciones se escribirán en JSDoc directamente en los archivos `/route`. Puede enumerar los nombres de archivo individualmente o usar el delimitador comodín * para agregar todos los archivos JavaScript en un directorio, como se muestra arriba.

El objeto de opciones es usado por `swagger-jsdoc` para producir una especificación de OpenAPI en una variable llamada `swaggerSpec`. Esta especificación es equivalente al archivo `swagger.json` o `swagger.yaml` que normalmente usa Swagger UI para crear una página de documentos. Pasará este objeto a la interfaz de usuario de Swagger en el siguiente paso.


### 1.3: Crear la página de documentos de la IU de Swagger

Para crear una página de IU de Swagger para su API Express, incluya `swagger-ui-express` en el archivo app.js. Luego, agregue una ruta de punto final llamada Como se muestra arriba, swagger-ui-express proporciona dos devoluciones de llamada para configurar el punto final: una para configurar la IU de Swagger con las definiciones swaggerSpec y otra para servirla en el punto final / docs. (o cualquier nombre que elija):

```jsx
// app.js
// ...
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// ...

var app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

```

Como se muestra arriba, `swagger-ui-express` proporciona dos devoluciones de llamada para configurar el punto final: una **para configurar** la IU de Swagger con las definiciones `swaggerSpec` y otra para **servirla** en el punto final `/docs`.


![image](https://ginger-cheese-954.notion.site/image/https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--ZwQ-_boc--%2Fc_limit%252Cf_auto%252Cfl_progressive%252Cq_auto%252Cw_880%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ffvsnzhvcj94o3ced81lk.png?table=block&id=18003ce0-c04e-4f9a-a98e-08381753a990&spaceId=cfce52b7-e0d5-4dbb-b152-95ab4a106956&width=3450&userId=&cache=v2)

You now have the start of a beautiful docs page for your API! The rest of this tutorial provides a basic introduction to OpenAPI definitions.

## Step 2: Defina la información raíz de su API

Ha creado una página de documentos de la IU de Swagger y está listo para comenzar a escribir documentos. Pero primero, debe agregar más definiciones de raíz para la API.

Regrese a `app.js`. Tenga en cuenta que el objeto de [información se asigna al objeto](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject) de información de OpenAPI para definir un título, descripción, lista de servidores, información de contacto y lista de rutas para su API

A continuación, se muestra un ejemplo de una definición más completa:

```jsx
// app.js
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

```

## Routes
Documentar las rutas con JSdoc de acuerdo a la documentacion de de OPEN API.
```js


/**
 * @swagger
 * /test:
 *  get:
 *    description: ALGO MUY LARGO
 *    summary: Ruta de prueba
 *    responses:
 *      200:
 *        description: Exitosa respuesta
 *        content:
 *          application/json:
 *            schema:
 *              type: "object"
 *              properties:
 *                message:
 *                  type: string
 *                  description: Es un mensaje de verificacion
 *                  example: OK
 *      500:
 *        description: Server error
 */
app.get('/test', (req, res) => {
  res.json({ message: "ok" })
})

/***
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    security:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: "object"
 *            properties:
 *              title:
 *                type: string
 *                description: Name of task
 *                example: Generate documentation
 *              completed:
 *                type: bool
 *                description: Is completed t
 *                example: false
 *    responses:
 *      201:
 *        description: Created a new task
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: Generate documentation
 *                _id:
 *                  type: string
 *                  example: 614a96635701df551c9d2623
 *                completed:
 *                  description: Is completed t
 *                  example: false
 *
 */
app.post('/tasks', tasksController.create);


/***
 * @swagger
 * /me:
 *  get:
 *    summary: Get personal info
 *    security:
 *      bearerAuth: []
 *    responses:
 *      20o:
 *        description: Personal Info
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                firstName:
 *                  type: string
 *                  example: Cristian
 *                lastName:
 *                  type: string
 *                  example: Moreno
 *                email:
 *                  type: string
 *                  example: cristian.moreno
 *
 */
app.get('/me', auth, authController.me);


module.exports = app;
```
