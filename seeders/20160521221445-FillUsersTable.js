'use strict';

var crypto = require('crypto');

function encryptPassword(password, salt) {
  return crypto.createHmac('sha1', salt).update(password).digest('hex');
}

module.exports = {
  up: function (queryInterface, Sequelize) {
  
  },

  down: function (queryInterface, Sequelize) {
    
  }
};
