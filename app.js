const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// module.exports = { sum };

// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // pound
// }
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 1;
    //return the dollar value
    return valueInYen;

}
const fromPoundToYen = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound =  valueInYen * .08;
    //return the dollar value
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromPoundToYen }
