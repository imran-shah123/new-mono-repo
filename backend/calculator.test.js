const mathOperations = require('./calculator');

describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = mathOperations.add(1,2)
 
   // assert
   expect(result).toBe(3);
 });
})


describe("Calculator tests", () => {
  test('subtracting 2 -1 should return 1', () => {
    // arrange and act
    var result = mathOperations.subtract(2,1)
  
    // assert
    expect(result).toBe(1);
  });
 })

 
 describe("Calculator tests", () => {
  test('multiply 1 * 2 should return 2', () => {
    // arrange and act
    var result = mathOperations.multiply(2,1)
  
    // assert
    expect(result).toBe(2);
  });
 })
 