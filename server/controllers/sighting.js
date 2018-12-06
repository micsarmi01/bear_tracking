const Sighting = require('../models').Sighting;
const uuidv4 = require('uuid/v4');
const ALLOW_ALL_COUNTRIES = "any"
var validator = require('validator');
var fs = require("fs");

module.exports = {
  create(req, res) {
    // Validation to prevent Negative Numbers, Decimals, and non integers
    var num_options = new Object();
    num_options.no_symbols = true;
    if (!validator.isNumeric(req.body.num_bears, num_options)){
      throw "Invalid Value for num_bears";
    }

    // Validation for Zipcode
    // The ALLOW_ALL_COUNTRIES allows us to check that a valid postal code is used
    // regardless of the country.
    console.log(req.body.zip_code)
    if (!validator.isPostalCode(req.body.zip_code, ALLOW_ALL_COUNTRIES)){
      throw "Invalid Value for zipcode";
    }

    // Validation for Bear Type
    // Compares request bear_type to a list of valid bear species
    var text = fs.readFileSync("./bear_types.txt").toString('utf-8');
    var bear_list = text.split("\n")
    if (!bear_list.includes(req.body.bear_type.toLowerCase())){
      throw "Invalid Bear Type";
    }

    return Sighting
      .create({
        id: uuidv4(),
        num_bears: req.body.num_bears,
        zip_code: req.body.zip_code,
        created_date: new Date(),
        // Sanitize notes for DB
        notes: validator.escape(req.body.notes),
        bear_type: req.body.bear_type.toLowerCase(),
      })
      .then(sighting => res.status(201).send(sighting))
      .catch(error => res.status(400).send(error));
  },
  // Retrieve a single Sighting by ID
  retrieve(req, res) {
    return Sighting
      .findByPk(req.params.id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Invalid Sighting ID. Sighting Not Found!',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
    },
};
