const Pirate = require('../models/pirate.model');

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then((allPirates) => {

            res.json({
                pirates: allPirates
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.findOneSinglePirate = (req, res) => {
    Pirate.findOne({
            _id: req.params.id
        })
        .then(oneSinglePirate => {
            console.log(oneSinglePirate)
            res.json({
                pirate: oneSinglePirate
            })
        })
        .catch((err) => {

            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.createNewPirate = (req, res) => {

    Pirate.create(req.body)
        .then(newlyCreatedPirate => {   
            res.json({
                pirate: newlyCreatedPirate
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.updateExistingPirate = (req, res) => {
    Pirate.findOneAndUpdate({
                _id: req.params.id
            },
            req.body, {
                new: true,
                runValidators: true
            }
        )
        .then(updatedPirate => {
            res.json({
                pirate: updatedPirate
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.deleteAnExistingPirate = (req, res) => {
    Pirate.deleteOne({
            _id: req.params.id
        })
        .then(result => {
            res.json({
                result: result
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}