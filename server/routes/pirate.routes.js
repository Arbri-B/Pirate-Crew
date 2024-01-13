const PirateController = require('../controllers/pirate.controller');
module.exports = (app) => {
    app.get('/api/pirates', PirateController.findAllPirates);
    app.post('/api/pirates', PirateController.createNewPirate);
    app.get('/api/pirate/:id', PirateController.findOneSinglePirate);
    app.put('/api/pirate/:id', PirateController.updateExistingPirate);
    app.delete('/api/pirate/:id', PirateController.deleteAnExistingPirate);

}