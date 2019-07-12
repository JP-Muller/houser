require('dotenv').config({
    path: __dirname + '/../.env'
})

const express = require('express')
const cors = require('cors')
const iCtrl = require('./controller')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env


const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/listings', iCtrl.getListings)
app.post('/api/addListing', iCtrl.addListing)
app.delete('/api/deleteListing/:id', iCtrl.deleteListing)


massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Pulled Data!')
    })

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})