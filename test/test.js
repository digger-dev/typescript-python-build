'use strict';
var expect = require('chai').expect;
var index = require('../dist/python_builder.js');

describe('runPython function test', () => {
  it('should return Boys', () => {
    var result = index.runPython('Boy',"adsf.py");
    expect(result).to.equal('Boys');
  })
  it('should return Girls', () => {
      var result = index.runPython('Girl',"asdf");
      expect(result).to.equal('Girls');
  });
  it('should return Geese', () => {
      var result = index.runPython('Goose',"asdf");
      expect(result).to.equal('Geese');
  });
  it('should return Toys', () => {
      var result = index.runPython('Toy',"asdf");
      expect(result).to.equal('Toys');
  });
  it('should return Men', () => {
      var result = index.runPython('Men',"asdf.py");
      expect(result).to.equal('Men');
  });
})