'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sighting = sequelize.define('Sighting', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_date: DataTypes.DATE,
    bear_type: DataTypes.STRING,
    num_bears: DataTypes.INTEGER,
    zip_code: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {timestamps: false});
  Sighting.associate = function(models) {
    // associations can be defined here
  };
  return Sighting;
};
