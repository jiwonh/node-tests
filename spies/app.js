// must be var declare to swap in rewire module
var db = require('./db');

module.exports.handleSignup = (email, password) => {
  db.saveUser({email, password});
}
