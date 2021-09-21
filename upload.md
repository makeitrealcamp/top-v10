# Subiendo imágenes

Desde el front debemos agregar un campo de tipo "file" y utilizar el FormData para enviar la información al servidor.

```js
function UploadImage() {
  const [file, setFile] = useState(null)

  function onChangeFile(e) {
    setFile(e.target.files[0])
  }

  async function sendFile() {
    const formData = new FormData()
    formData.append("image", file)
    await axios.post('/upload', formData)
  }

  return (
    <>
      <input type="file" onChange={onChangeFile}></input>
      <button onClick={sendFile}>Enviar</button>
    </>
  )
}
```

En el backend instalar [express-busboy](https://www.npmjs.com/package/express-busboy).

```js
const bb = require('express-busboy');
// ... más imports

bb.extend(app, {
  upload: true,
  path: 'uploads',
  allowedPath: /./
});
```

En cualquier ruta vamos a tener un objeto `req.files` con los archivos que se cargaron. Generalmente se crea una ruta `/uploads` para subir a cloudinary.

```js
app.post('/upload', (req, res, next) => {
  console.log("Files", req.files)

  cloudinary.uploader.upload(req.files.image.file, function(error, result) {
    if (error) {
      return next(error)
    }
    
    console.log(result, error)
    const url = result.url // esta URL se guardaría en MongoDB
  });
})
```