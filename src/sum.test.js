const sum = require('./sum')

test("add test", () => {
    expect(sum(1, 2)).toBe(3);
});