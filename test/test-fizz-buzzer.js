// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzbuzzer
const adder = require('../fizzBuzzer.js');

describe('fizzbuzzer', function() {

    // test the normal case
    it('should return fizz', function() {
      const normalCases = [
        {a: 9, b: 3, expected: 'fizz'},
        {a: 3, b: 3, expected: 'fizz'},
        {a: 12, b: 3, expected: 'fizz'}
      ];
      // for each set of inputs (a, b), `adder` should
      // produce the expected value
      normalCases.forEach(function(input) {
        const answer = adder(input.a, input.b);
        expect(answer).to.equal(input.expected);
      });
    });

    it('should return buzz', function() {
        const normalCases = [
          {a: 10, b: 5, expected: 'buzz'},
          {a: 20, b: 5, expected: 'buzz'},
          {a: 25, b: 3, expected: 'buzz'}
        ];
        // for each set of inputs (a, b), `adder` should
        // produce the expected value
        normalCases.forEach(function(input) {
          const answer = adder(input.a, input.b);
          expect(answer).to.equal(input.expected);
        });
      });

      it('should return fizz-buzz', function() {
        const normalCases = [
          {a: 15, b: 3, expected: 'fizz-buzz'}
        ];
        // for each set of inputs (a, b), `adder` should
        // produce the expected value
        normalCases.forEach(function(input) {
          const answer = adder(input.a, input.b);
          expect(answer).to.equal(input.expected);
        });
      });

      it('should return number', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
          {a: 1, b: 3, expected: 1},
          {a: 4, b: 3, expected: 4},
          {a: 7, b: 5, expected: 7}
        ];
        // for each set of inputs (a, b), `adder` should
        // produce the expected value
        normalCases.forEach(function(input) {
          const answer = adder(input.a, input.b);
          expect(answer).to.equal(input.expected);
        });
      });
  
    it('should raise error if args not numbers', function() {
      // range of bad inputs where not both are numbers
      const badInputs = [
        ['a', 1],
        ['1', 2],
        [2, false]
      ];
      // prove that an error is raised for bad inputs
      badInputs.forEach(function(input) {
        expect(function() {
          fizzBuzzer(input[0], input[1]);
        }).to.throw(Error);
      });
    });
  });