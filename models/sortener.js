'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sortener = sequelize.define('Sortener', {
    url: DataTypes.STRING,
    sortener_url: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate : function(callback) {
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let length = 4;
        let result = '';
        for(let i=length; i>0; --i){
          result += str[Math.floor(Math.random()*str.length)]
        }
        callback.sortener_url = result;
      }
    }
  });
  return Sortener;
};
