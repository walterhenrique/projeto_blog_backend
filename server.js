const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.get('/', async(req, res) =>{

    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
        return res.json(data)
        //nesta linha de cima, em vez de nomes, enviar a postagem salva
    } catch (error) {
        console.error(error)
    }
    }
)

app.listen('4567')
