const expect = require('expect');
const utils = require('./utils');

describe('utils.js', () => {
    describe('#add', () => {
      it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
        // if (res !== 44) {
        //   throw new Error(`Exptected 44, but got ${res}.`);
        // }
      });

      // async
      it('should async add two number', (done) => {
        utils.addAsync(2, 3, (res) => {
          expect(res).toBe(5).toBeA('number');
          done();
        });
      });
    });

    describe('#square', () => {
      it ('should square number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
      });

      // asyc
      it('should async square number', (done) => {
        utils.squareAsync(5, (res) => {
          expect(res).toBe(25).toBeA('number');
          done();
        });
      });
    });

    describe('Playground', () => {
      // object
      it ('should expect object values', () => {
        expect({name: 'jiwon'}).toEqual({name: 'jiwon'});
        expect({name: 'jiwon', age: 40}).toInclude({age: 40});
        expect([2, 3, 4]).toExclude(5);
      });

      it ('should verify firstName and lastName', () => {
        var user = {location: '819B 115th ST SW', age: 25};
        var res = utils.setName(user, 'Jiwon Han');
        expect(res).toInclude({
          firstName: 'Jiwon',
          lastName: 'Han'
        });
      });
    });
});
