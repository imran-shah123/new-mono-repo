const sum = require('../sum')
const subtract = require('../subtract')
test('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 2)).toBe(3)
})

test('adds 4 + 2 to equal 5', function() {
    expect(sum(3, 2)).toBe(5)
})

test('adds 2 + 2 to equal 4', function() {
    expect(sum(2, 2)).toBe(4)
})

test('subtract 2 - 2 to equal 0', function() {
    expect(subtract(2, 2)).toBe(0)
})

