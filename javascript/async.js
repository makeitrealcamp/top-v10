const fs = require('fs')

// asincrónico - Callback Hell
fs.readFile('../README.md', "utf8", (err, content) => {
  if (err) {
    return console.log(err)
  }
  db.save(content, (err, data) => {
    if (err) {
      return console.log(err)
    }
    axios('http://example.com', response => {
      console.log('Response: ', response)
    })
  })
})

// Promesas (Promise)
fs.readFile('../README.md')
  .then(content => db.save(content))
  .then(data => axios('http://example.com'))
  .then(response => console.log(response))
  .catch(err => console.log(err))

// Async/Await - Syntactic Sugar
async function save() {
  const content = await fs.readFile('../README.md')
  const data = await db.save(content)
  const response = await axios('http://example.com')
  console.log(response)
}

save().then(() => console.log("Terminó el save"))
console.log("hola")

// Escenario Ideal - Sincrónica (No funciona en JavaScript)
const content = readFile('../README.md')
const data = db.save(content)
const response = axios('http://example.com')
console.log(response)
