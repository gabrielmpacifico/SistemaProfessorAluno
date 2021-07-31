const express = require('express')
const router = express.Router()

router.get('/turmas', (req, res) => {
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Conteudo legal',
        autor: 'Gabriel Pacifico'
    })
})

module.exports = router