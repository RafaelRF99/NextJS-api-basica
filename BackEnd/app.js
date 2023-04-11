const express = require('express')

const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

const usuarios = require('./usuarios.json')

server.get('/', (req,res) => {
    res.status(200).json({msg: "Servidor Rodando!"})
})

server.get('/api/usuarios', (req, res) => {
    res.status(200).json(usuarios)
})

server.listen(3001)