const express = require('express')
const cors = require('cors')
const app = express()

// middlewares - chain of responsability
app.use(cors())
app.use(express.json()) // parsea el body a JSON

const logger = (req, res, next) => {
  // autenticación, trazabilidad
  console.log("Llegó una nueva petición")
  next()
}
// app.use(logger)

// rutas - endpoints
let nextId = 4;
app.get('/tasks', logger, (req, res) => {
  res.jdson([
    { id: 1, title: "Tarea 1", completed: false},
    { id: 2, title: "Nueva Tarea 2", completed: true},
    { id: 3, title: "Tarea 3", completed: false},
  ])
})

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (title.length === 0) {
    res.status(422).json({ error: "validation-failed", field: "title", message: "El título no puede ser vacío" })
    return
  }

  res.status(201).json({ id: 4, title, completed: false })
})

app.delete('/tasks/:id', (req, res) => {
  res.status(204).end()
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ error: err.message })
})

app.listen(3001, () => console.log("Servidor corriendo ..."))
