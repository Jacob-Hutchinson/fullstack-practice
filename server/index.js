const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const {addPerson, getpersons, deletePerson} = require('./controller')

app.post('/person', addPerson)
app.get('/person', getpersons)
app.delete('/person/:id', deletePerson)


const PORT = 4004
app.listen(PORT, () => console.log(`listening on port ${PORT}`))