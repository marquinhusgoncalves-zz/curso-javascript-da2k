'use strict'

var expect = require('chai').expect;
var sum = require('../src/sum')

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });
});