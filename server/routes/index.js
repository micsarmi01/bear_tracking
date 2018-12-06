const sightingsController = require('../controllers').sighting;

module.exports = (app) => {
  // POST /sighting
  app.post('/sighting', sightingsController.create);
  // GET /sighting/:id
  app.get('/sighting/:id', sightingsController.retrieve);
};
