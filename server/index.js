const getKinetic = require('./controllers/KineticController.js')
const getKinetics = require('./controllers/KineticController.js')

const getEnergy = require('./controllers/EnergyController.js')
const getEnergies = require('./controllers/EnergyController.js')

const getHeavy = require('./controllers/HeavyController.js')
const getHeavies = require('./controllers/HeavyController.js')

const lc = require('./controllers/LoadoutsController.js')

const express = require('express')
const app = express()
app.use(express.json())

const PORT = 4000
app.listen(PORT, () => console.log(`server blazin on ${PORT}`))

//Endpoints
app.get('/api/kinetic/:id', getKinetic)
app.get('/api/kinetic/', getKinetics)

app.get('/api/energy/:id', getEnergy)
app.get('/api/energy/', getEnergies)

app.get('/api/heavy/:id', getHeavy)
app.get('/api/heavy/', getHeavies)

const loadoutsBaseUrl = '/api/loadouts'
app.post(loadoutsBaseUrl, lc.newLoadout)
app.get(loadoutsBaseUrl, lc.read)
app.delete(`${loadoutsBaseUrl}/:id`, lc.delete)
app.put(`${loadoutsBaseUrl}/:id`, lc.update)