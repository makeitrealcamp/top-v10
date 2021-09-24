# CircleCI & Heroku

## Precondiciones

- Cuenta en circleCI y Heroku
- Tener creada la app de heroku

## Configuracion

- Primero vamos a crear en nuestro proyecto, en la raíz una carpeta llamada: `.circleci`.
- Dentro de la carpeta crearemos un archivo llamada `config.yml`

En el archivo `config.yml`, es donde realizaremos la configuración.

```
version: 2.1

orbs:
  heroku: circleci/heroku@0.0.10

jobs:
  build:
    docker:
      - image: circleci/node:14.17.6
    working_directory: ~/project
    steps:
      - checkout
      # install dependencies
      - run:
          name: Install Dependencies
          command: npm install
      - run:
          name: Run tests
          command: npm run test

workflows:
  heroku_deploy:
    jobs:
      - build
      - heroku/deploy-via-git: # Use the pre-configured job, deploy-via-git
          requires:
            - build
          filters:
            branches:
              only: main
```

### Configuracion CircleCI

- debemos seleccionar nuestro repositorio desde nuestro repositorio (github)

### Configurar heroku en CircleCI

Debes ir a la configuracion del proyecto y agregar las siguiente variables `HEROKU_APP_NAME` y `HEROKU_API_KEY`. Su `HEROKU_APP_NAME` es el nombre de su aplicación Heroku. Su `HEROKU_API_KEY` es una clave creada para usted después de registrarse en Heroku y debe mantenerse en secreto.

Puede obtener su clave API de Heroku en la configuración de su cuenta.


## Administrar PR

A continuación, nos aseguraremos de que nuestra rama principal de GitHub esté protegida asegurándonos de que los Pull Request no se puedan fusionar a menos que nuestra compilación pase. Para hacer esto, en el repositorio de GitHub, vaya a la pestaña de configuración. Desde allí, haga clic en Agregar regla en la pestaña Ramas.

Agregue `main` al patrón de nombre de rama. En el menú Requerir comprobaciones de estado para aprobar antes de fusionar, seleccione la opción `ci/circleci:build` (toca buscarlo)
