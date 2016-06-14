(function() {
  'use strict';

  var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'Andela-Checkpoint-3';

  module.exports = {

    encrypt: function(text) {
      var cipher = crypto.createCipher(algorithm, password);
      try {
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    decrypt: function(text) {
      var decipher = crypto.createDecipher(algorithm, password);
      try {
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  };
}());
