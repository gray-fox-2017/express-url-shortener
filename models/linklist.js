'use strict';
module.exports = function(sequelize, DataTypes) {
  var linkList = sequelize.define('linkList', {
    longUrl: DataTypes.STRING,
    shortURL: DataTypes.STRING,
    counter: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return linkList;
};