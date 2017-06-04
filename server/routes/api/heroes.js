const express = require('express')
const router  = express.Router()

const nextId = function* () {
  let id = 20
  while (true) {
    yield id += 1
  }
}()

const findById = id => hero => hero.id === id

const escapeRegExp = string => string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")

const heroes = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
]

/* GET home page. */
router.get('/', (req, res, next) => {
  const { name } = req.query

  if (typeof name === 'undefined') {
    res.json(heroes)
  }

  const nameMatcher = new RegExp(escapeRegExp(name), 'i')

  res.json(heroes.filter(hero => nameMatcher.test(hero.name)))
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const hero   = heroes.find(findById(+id))

  if (!hero) {
    return res.status(404).send('Hero not found')
  }

  res.json(hero)
})

router.post('/', (req, res, next) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).send('name is required')
  }

  const id = nextId.next().value
  const hero = {
    id, name,
  }

  heroes.push(hero)

  res.json(hero)
})

router.patch('/:id', (req, res, next) => {
  const { id }   = req.params
  const { name } = req.body
  const idIndex  = heroes.findIndex(findById(+id))
  
  if (idIndex === -1 || !name) {
    return res.status(400).send('request is invalid')
  }

  const hero = {
    id: +id,
    name,
  }

  heroes[idIndex] = hero

  res.json(hero)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  const index  = heroes.findIndex(findById(+id))

  if (index === -1) {
    return res.status(404).send('Hero not found')
  }

  heroes.splice(index, 1)

  return res.status(204).send()
})

module.exports = router
