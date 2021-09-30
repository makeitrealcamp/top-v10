# Sendgrid
1. Cómo enviar correo electrónico usando Node.js
Asegúrese de tener los requisitos previos

2. Crea una clave de API
Esto permite que su aplicación se autentique en nuestra API y envíe correo. Puede habilitar o deshabilitar permisos adicionales en la página de claves API.

3. Cree una variable de entorno
Actualice su entorno de desarrollo con su `SENDGRID_API_KEY`. Ejecute lo siguiente en su shell:

```bash
echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

4. Instale el paquete
La siguiente instalación recomendada requiere npm. Si no está familiarizado con npm, consulte los documentos de npm. Npm viene instalado con Node.js desde la versión 0.8.x del nodo, por lo tanto, es probable que ya lo tenga:

```bash
npm install --save @sendgrid/mail
```

5. Envíe su primer correo electrónico
El siguiente es el código mínimo necesario para enviar un correo electrónico:

```js
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
```
