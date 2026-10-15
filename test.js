// Import the functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("1.07 dollars should be 156.5 yen", function () {
    // Since 1 euro = 1.07 dollars = 156.5 yen, then 1.07 dollars should equal 156.5 yen
    expect(fromDollarToYen(1.07)).toBe(156.5);
});

test("10 dollars should be converted to yen correctly", function () {
    // 10 dollars * (156.5 / 1.07) yen per dollar
    expect(fromDollarToYen(10)).toBeCloseTo(1462.6168, 4);
});

test("156.5 yen should be 0.87 pounds", function () {
    // Since 1 euro = 156.5 yen = 0.87 pounds, then 156.5 yen should equal 0.87 pounds
    expect(fromYenToPound(156.5)).toBe(0.87);
});

test("100 yen should be converted to pounds correctly", function () {
    // 100 yen * (0.87 / 156.5) pounds per yen
    expect(fromYenToPound(100)).toBeCloseTo(0.5559, 4);
});
