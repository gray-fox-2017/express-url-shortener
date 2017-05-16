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
      beforeCreate: (url,options) => {

        // User.beforeCreate((user, options) => {
        //   return hashPassword(user.password).then(hashedPw => {
        //     user.password = hashedPw;
        //   });
        // });

        return generateShortUrl().then((n_surl)=>{
          url.surl = n_surl;
        })

      }//end beforeCreate
    }//end hook
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      generateShortUrl: function() {
        let flag = false;
        let n_surl;

        Url.count().then((c)=> {
          if(c === 0) {
            n_surl = helper.generateShortUrl();
            return n_surl;
          }
          else {
            while (flag === false) {
              n_surl = helper.generateShortUrl();
              Url.findOne({where:{surl:n_surl}})
              .then(()=>{})
              .catch((err)=>{
                flag = true;
                return n_surl;
              })
            }
          }

        }).catch((err)=>{
          n_surl = helper.generateShortUrl();
          return n_surl;
        })
      }
    }
  });
  return Url;
};