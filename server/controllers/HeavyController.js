const heavy = require('../data/heavy.js')

const getHeavy = (req, res) => {
    const weapon = heavy.find(val => val.id === parseInt(req.params.id));

    if (!weapon) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(weapon);
}

const getHeavies = (req, res) => {
    const weapons = heavy
    
    res.status(200).send(weapons)
}

module.exports = getHeavy
module.exports = getHeavies