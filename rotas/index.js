const express = require('express')
const router = require('express').Router()

router.use('/', require('./escolas'))
router.use('/', require('./turmas'))
router.use('/', require('./alunos'))

module.exports = router