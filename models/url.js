'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shortener_url: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
      hooks: {
        beforeCreate : function(callback){
          let char  = '0123456789abcdefghijklmnopqrsttupwxyzABCDEFGHIJKLMNOPQRSTUPWXYZ';
          let length = 4;
          let result = '';
          for (var i = 0; i < length; i++) {
            result += char[Math.floor(Math.random()* char.length)]
            callback.shortener_url = result;
          }
        }
      }
  });
  return Url;
};
