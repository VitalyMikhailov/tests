const {add, mult} = require('../helpers')
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

it ('shoud add 2 + 5 eq 4', ()=>{
    expect(add (2,5)).equal(7);
});


it ('shoud add 2 + 5 eq 4', ()=>{
    assert.equal(add (2,5),7)
});
it ('shoud mult 2 + 4 eq 4', ()=>{
    assert.equal(mult (2,4),8)
});

console.log(add(45,54));
console.log(mult(45,54));