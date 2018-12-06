const sightingsController = require('../controllers').sighting;

module.exports = (app) => {
  app.post('/sighting', sightingsController.create);
  app.get('/sighting/:id', sightingsController.retrieve);
  app.get('/search', sightingsController.search)
};
