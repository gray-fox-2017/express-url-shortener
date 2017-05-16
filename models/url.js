'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short: DataTypes.STRING,
    click: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    hooks: {
      beforeCreate: (model) => {
        let randomString = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let random = ''
        for(let i=0; i<5; i++){
          let indexRandom = Math.floor(Math.random() * randomString.length)
          let shuffle = randomString[indexRandom]
          random += shuffle
        }
        model.short = random
      }
    }
  })
  return Url;
};
