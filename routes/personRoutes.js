const router = require('express').Router()
const Person = require('../models/Person')


router.get('/', (req, res) => {
    res.json({ message: 'TESTE' })
})

//create 
router.post('/', async (req, res) => {

    const { name, salary, approved } = req.body

    if (!name) {
        res.status(422).json({ error: 'Nome é obrigatório!' })
        return
    }

    const person = {
        name,
        salary,
        approved
    }

    try {
        await Person.create(person)
        res.status(201).json({ message: 'Pessoa inserida com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


// get all 
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200), json(people)

    } catch (error) {
        rest.status(500).json({ error: error })
    }

})



//get by id 
router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const person = await Person.findOne({ _id: id })
        res.status(200), json(person)

        if (!person) {
            res.status(422).json({ message: 'O usuario não foi localizado' })
            return
        }

    } catch (error) {
        res.status(500).json({ error: error })

    }
})

module.exports = router