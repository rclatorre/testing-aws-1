const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    let salida = 'Respuesta del Backend'

    res.send(salida)
})

app.listen(4000, () => {
    console.log('Escuchando en el puerto 4000')
})