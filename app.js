// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Conversion ratios, all based on 1 Euro:
// 1 EUR = 1.07 USD (US Dollar)
// 1 EUR = 156.5 JPY (Japanese Yen)
// 1 EUR = 0.87 GBP (British Pound)

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function (valueInDollar) {
    // Since 1 EUR = 1.07 USD = 156.5 JPY, then 1 USD = (156.5 / 1.07) JPY
    let valueInYen = valueInDollar * (156.5 / 1.07);
    // return the yen value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function (valueInYen) {
    // Since 1 EUR = 156.5 JPY = 0.87 GBP, then 1 JPY = (0.87 / 156.5) GBP
    let valueInPound = valueInYen * (0.87 / 156.5);
    // return the pound value
    return valueInPound;
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the functions to be used on other files
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
