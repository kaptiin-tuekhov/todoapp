const express = require('express')
const { TodoController } = require('../controllers')

const router = express.Router()

router.get('/', (req, res) =>
  TodoController.getAllTodos()
    .then(todos => res.status(200).send(todos))
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
)

router.post('/', (req, res) =>
  TodoController.createNewTodo(req.body)
    .then(newTodo => res.status(201).send(newTodo))
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
)

router.put('/:id', (req, res) => {
  TodoController.saveTodo(req.params.id, req.body)
    .then(updatedTodo => res.status(200).send(updatedTodo))
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
})

router.delete('/:id', (req, res) => {
  TodoController.deleteTodo(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
})

module.exports = router
