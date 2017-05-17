'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    norm_url: {
      type: DataTypes.STRING,
      // validate: {
      //   contains: 'http://',
      // }
    },
    short_url: DataTypes.STRING,
    click_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },{
    hooks: {
      beforeCreate : function(Urls) {
          let deployUrl = "";
          let devUrl = "localhost:3000/";
          let length = 5
          let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          let result = '';
          for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)]
          };
          Urls.short_url = devUrl + result;

      }
    }
  })
  return Url;
};
