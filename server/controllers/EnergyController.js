const energy = require('../data/energy.js')

const getEnergy = (req, res) => {
    const weapon = energy.find(val => val.id === parseInt(req.params.id));

    if (!weapon) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(weapon);
}

const getEnergies = (req, res) => {
    const weapons = energy
    
    res.status(200).send(weapons)
}

module.exports = getEnergy
module.exports = getEnergies