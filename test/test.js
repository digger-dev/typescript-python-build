'use strict';
var expect = require('chai').expect;
var index = require('../dist/python_builder.js');

describe('runPython function test', () => {
  it('return Hello', () => {
    var result = index.runPython('C:/Users/Yunsang/Anaconda3/envs/test/python.exe',"C:/Users/Yunsang/Documents/test.py");
    setTimeout(function(){
      var output = index.getOutPut();
      console.log(output);
    }, 500);
    // expect(output).to.equal("Hello");
  })
})