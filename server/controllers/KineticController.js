const kinetic = require('../data/kinetic.js')

const getKinetic = (req, res) => {
    const weapon = kinetic.find(val => val.id === parseInt(req.params.id));

    if (!weapon) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(weapon);
}

const getKinetics = (req, res) => {
    const weapons = kinetic
    
    res.status(200).send(weapons)
}

module.exports = getKinetic
module.exports = getKinetics