console.log("JS Function");

//code block
// function run(){
//     let x = 5;
//     let y = 10;
//     console.log(x + y);
// }

// run()

// function stars(text = "*"){
//     console.log(`${text}`);
//     console.log(`${text} ${text}`);
//     console.log(`${text} ${text} ${text}`);
//     return "this is stars";
//     // console.log("* * * *");
// }

// stars("**")
// stars("-")
// stars("0")
// stars("x")
// stars(">")
// stars();

// console.log(stars());
// console.log(stars());
// console.log(stars());

// let x;
// console.log(x);

// function adding(x,y){
//     return x+y;
// }

// console.log(adding(2,3));
// console.log(adding(5,6));

// age calculate ( birthYear )

function calcAge(birthYear) {
  let currentYear = 2023;
  let age = currentYear - birthYear;
  return `You are ${age} years old`;
}

// console.log(calcAge(1994));
// console.log(calcAge(2002));
// console.log(calcAge(2005));

// tax calculation 5% amount
// ( amount / 100 ) * 5 = 5% of amount = tax
// ( amount / 100 ) * 10 = 10% of amount = tax

function calcTax(amount, taxPercentage = 5) {
  let tax = (amount / 100) * taxPercentage;
  return tax;
}

// console.log(calcTax(10000));
// console.log(calcTax(345,50));
// console.log(calcTax(500,10));

// let x = null;
// console.log(x);

const results = [];
let resultIndex = 0;

function calcArea(w, b) {
    // return ` ${w} * ${b} = ${ w * b } sqft`;
//   return w * b + "sqft";
    let area = w*b;

    const result = {
        width : w + "ft",
        breadth : b + "ft",
        area : area + " sqft"
    }

    results [resultIndex++] = result; // add result to results array

    return result;
}

// console.log(calcArea(17, 60));
// console.log(calcArea(15, 50));
// console.log(calcArea(25, 50));
// console.log(calcArea(15, 60));
// console.log(calcArea(10, 40));

// console.table(results);

const rates = {
    USD : 2100,
    SGD : 1579,
    EUR : 2335
}

// console.log(rates.USD);
// console.log(rates["SGD"]);
// console.log(rates.SGD);

// logic ( 100 * USD )
// 100 USD to ?MMK
// 45SGD to ?MMK
// 678EUR to ?MMK

function toMMK(amount, currency){
    // console.log(typeof currency);
    // console.log(rates[currency]);
    let exchangeRate = rates[currency];
    return `${ amount * exchangeRate } MMK`;
}

// console.log(toMMK(100,"USD"));
// console.log(toMMK(45,"SGD"));
// console.log(toMMK(678,"EUR"));

// 100000 MMk to USD
// 35000 MMk to SGD
// 600000 MMk to EUR

function toCurrency(amount,currency){
    let exchangeRate = rates[currency];
    return `${(amount / exchangeRate).toFixed(2)} ${currency}`;
}   

// console.log(toCurrency(100000, "USD"));
// console.log(toCurrency(35000, "SGD"));
// console.log(toCurrency(600000, "EUR"));



const fruits = {
    apple : 500,
    orange : 300,
    mango : 700,
    banana : 200
};

let total = 0;
const voucher = [];
let voucherIndex = 0;

function buy(item,quantity){
    let itemPrice = fruits[item];
    // console.log(itemPrice);
    let cost = quantity * itemPrice;
    total = total + cost;
    let list = {
        item,
        price : itemPrice,
        quantity,
        cost 
    }

    voucher[voucherIndex++] = list;
    return cost;
}

buy("apple",5);
buy("orange",8);
buy("mango",2);
buy("banana",15);

console.table(voucher);

// console.log("total",total);
// console.log("tax",calcTax(total));
// console.log("net total", total + calcTax(total))

console.table({
    total,
    tax : calcTax(total),
    netTotal : total + calcTax(total)
});