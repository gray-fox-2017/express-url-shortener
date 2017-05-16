'use strict';
const helper = require('../helper/util.js');
// const SequelizeTokenify = require('sequelize-tokenify');
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    surl: DataTypes.STRING,
    lurl: DataTypes.STRING,
    counter: DataTypes.INTEGER,
    createdAt : DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate: () => {
        let flag = false;
        Url.count().then((c)=> {
        })
        .err(()=>{
          flag = true;
          let n_surl = '';
          while (flag === false) {
            n_surl = helper.generateShortUrl();
            Url.findAll({where:{surl:n_surl}})
            .then(()=>{})
            .catch((err)=>{
              Url.surl = n_surl;
              flag = true;
            });
          }//end while flag
        })//end err

      }//end beforeCreate
    }//end hook
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Url;
};