# Despliegue en Heroku

## Prerequisitos

1. Descargar el [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Crear una cuenta en Heroku (si todavía no la tienen).
3. Loggearse en Heroku desde el CLI con el comando `heroku login`.

## Instrucciones

1. Utilizar variables de entorno (puerto, URL de MongoDB u otros servicios, llaves secretas, llaves de autenticación). Pueden utilizar la librería dotenv.
2. Crear la aplicación en Heroku (a través del CLI) con el comando `heroku create`.
3. Configurar las variables de entorno en Heroku (se puede hacer por CLI o por la Web).
4. Desplegar con el comando `git push heroku main`.

Después se pueden hacer más commits y nuevos push a Heroku.

Si tienen problemas se pueden revisar los logs con el comando `heroku logs`.


# Despliegue en Vercel

