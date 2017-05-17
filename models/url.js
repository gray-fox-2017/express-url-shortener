'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    link: DataTypes.STRING,
    short_link: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
      hooks: {
        beforeCreate: function(callback) {
          let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let length = 4;
          let result = '';
          for (let i = length; i > 0; i--) {
            result += str[Math.floor(Math.random() * str.length)];
          }
          callback.short_link = result
        }
      }
  });
  return Url;
};