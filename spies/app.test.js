const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  // create a simulation of fake db for test
  var db = {
    saveUser: expect.createSpy()
  }

  // swap db to fake db object in app
  app.__set__('db', db);

  it('should call spy correctly', () => {
    var spy = expect.createSpy();
    // call spy();
    spy('jiwon@example.com', 'abc123');
    expect(spy).toHaveBeenCalledWith('jiwon@example.com', 'abc123');
  });

  it('should call saveUser with user object', () => {
    var email = 'jiwon@example.com';
    var password = '123abc';

    // app.signupHandler will call db.saveUser() witch is spy()
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
