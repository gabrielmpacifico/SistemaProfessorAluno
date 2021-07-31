const express = require('express')
const router = express.Router()

router.get('/alunos', (req, res) => {
    res.json({
        nome1: 'Gabriel',
        nome2: 'Pedro',
        nome3: 'Carlos'
    })
})

router.get('/alunos/:postid', (req, res) => {
    res.json({
        nome: 'Gabriel Pacifico',
        idade: '24',
        sexo: 'Masculino'
    })
})

module.exports = router