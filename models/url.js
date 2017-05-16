'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    longUrl:DataTypes.STRING,
    shortUrl: DataTypes.STRING,
    count:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function(callback){
        let array = [],random = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let length = Math.floor((Math.random()*6)+3)
        for (var i = 0; i <length; i++) {
          array.push(random[Math.floor(Math.random()*random.length)])
        }
        array.push('.adk')
        let join = array.join('')
        callback.shortUrl = join
        // Url.findAll({where:{shortUrl:join}}, function(err, data){
        //   if(!data){
        //     console.log(join+' passed');
        //     callback.shortUrl = join
        //   }else{
        //     console.log(join+' url existed');
        //     beforeCreate()
        //   }
        // })
      }
    }
  });
  return Url;
};