const express = require('express')
const app = express()
const cors = require('cors')

require('./config/config')
const http = require('https')
const fs = require('fs')

var options = {
    key: fs.readFileSync(process.env.ServerOptionsKey),
    cert: fs.readFileSync(process.env.ServerOptionsCert) 
}

let server = http.createServer(options, app)

app.use(cors({origin: 'https://wiracocha.click', optionsSuccessStatus: 200}))

app.get('/', (req, res) => {
    let salida = 'Respuesta del Backend'

    res.send(salida)
})


app.set('port', 4000)

server.listen(4000, () => {
    console.log('Escuchando en el puerto 4000')
})