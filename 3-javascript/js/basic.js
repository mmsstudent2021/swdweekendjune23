// let x = 5;
// let y = x;
// console.log(x);

// x = 7;

// console.log(x);
// console.log(y);

// let x = ["a","b","c"];
// console.log(x);
// let y = x;
// console.log(y);

// console.log(x[0]);

// x[0] = "aaa";

// console.log(x);
// console.log(y);

// object, array, fun [ const ]

// const arr = ["a","b","c"];

// arr = 7;

// console.log(arr[0]);

// function run(){
//     console.log("hello");
//     return "this is run";
// }

// console.log(run());

// const run = function(){
//     console.log("hello");
//     return "this is run";
// }

// console.log(run());

// const adding = function(x,y){
//     return x + y;
// }

// console.log(adding(2,3));

// console.log((function(){
//     return "I'm IIFE"
// })());

// console.log(`I'm ${(function(){
//     let birthYear = 1994;
//     let currentYear = 2023;
//     return currentYear - birthYear;
// })()} years old`);
// let x = 5;

// function run(){
//     console.log(x);
// }

// run()

// {
//     console.log(x);
// }

// console.log(run());

// function run(){
//     return "this is run";
// }

// console.log(x);
// let x = 5;

// const obj = {
//     a : "aaa",
//     b: "bbb",
//     c : function(){
//         return "this is c method";
//     },
//     d(){
//         return "this is d method"
//     }
// }

// console.log(obj);
// console.log(obj.c());
// console.log(obj.d());

const exchangeCenter = {
  name: "MMS Money Exchange",
  address: "no 48, san chaung",
  openHour: {
    open: "9 am",
    close: "5 pm",
  },
  rates: [
    {
      currency: "USD",
      rate: 2100,
    },
    {
      currency: "SGD",
      rate: 1650,
    },
  ],
  intro() {
    return `This is ${this.name} and is located in ${this.address}`;
  },
  exchange: function (amount, fromCurrency, toCurrency) {
    //logic
    return "exchange money";
  },
  saveRecord: function (list) {
    // logic
    return "saved";
  },
};

// console.log(exchangeCenter.intro());

// console.log(5 > 10);
// console.log(5 == 10);
// console.log(5 < 10);

let x = 5;
let y = "5";
// console.log(x >= 5);
// console.log(x < 5);
// console.log(x == y); // value
// console.log(x === y); // value & type

// function run(){
//     console.log("I'm working");
// }

// run()

// if(true){
//     console.log("I'm working");
// }

// let currentHour = 9;

// if(currentHour >= 9){
//     console.log("I will start teaching");
// }

// let comingTime = 9

// if(comingTime <= 8){
//     console.log('ကျောင်း မှီမယ်');
// }else{
//     console.log("ကျောင်းနောက်ကျမယ်");
// }

// let mark = 80;

// if(mark >= 80){
//     console.log("Distention");
// }else if(mark >= 40){
//     console.log("Passed");
// }else{
//     console.log("Fail");
// }

// function run(x){
//     return x;
// }

// function isOddEven(x){
//     if(x % 2 === 0){
//         return x + " is Even";
//     }else{
//         return x + " is Odd"
//     }

// }

// function isOddEven(x){
//     if(x % 2 === 0){
//         return x + " is Even";
//     }
//         return x + " is Odd"
// }

// console.log(isOddEven(5));
// console.log(isOddEven(6));
// console.log(isOddEven(6354));

function wakeUpTime(x) {
  if (x > 8) {
    return "U will be ရိုက်ခံရမယ်";
  }
  return "အေးဆေးပဲ";
}

// console.log(wakeUpTime(5));
// console.log(wakeUpTime(10));
// console.log(wakeUpTime(9));

let busFee = 300;

function howToGo(pocketMoney) {
  if (pocketMoney >= busFee) {
    return "with Bus 🚌";
  }

  return "working";
}

// console.log(howToGo(500));
// console.log(howToGo(100));

function requestMoney(pocketMoney) {
  if (pocketMoney > busFee * 2) {
    return "I'll go to school";
  }
  return "angry 😡";
}

// console.log(requestMoney(500));
// console.log(requestMoney(1500));

function startTeaching(x) {
  if (x > 9) {
    return "teaching started";
  }
  return "waiting to start teaching";
}

// console.log(startTeaching(10));
// console.log(startTeaching(8));

function checkResult(mark) {
  if (mark >= 80) {
    return "Distention";
  } else if (mark >= 40) {
    return "Passed";
  }
  return "Fail";
}

// console.log(checkResult(98));
// console.log(checkResult(60));
// console.log(checkResult(30));

// console.log(checkResult());

// console.log( true ? true : false );
// console.log( [] ? true : false );
// console.log( {} ? true : false );
// console.log( 0 ? true : false );
// console.log( 100 ? true : false );
// console.log( -100 ? true : false );
// console.log( 1.5 ? true : false );
// console.log( undefined ? true : false );
// console.log( null ? true : false );
// console.log( "a" ? true : false );
// console.log( "" ? true : false );
// console.log( " " ? true : false );


// let yourStatus = false;

// console.log("Are U finish your lunch ?",yourStatus ? "finish" : "not yet");



function canIPassed(exam,viber){
  if(exam > 60 && viber > 60){
    return "U passed";
  }
  return "U fail";
}

// console.log(canIPassed(50,70));
// console.log(canIPassed(70,70));
// console.log(canIPassed(80,80));
// console.log(canIPassed(80,59));

function canIVote(age,nationality){
  if(age >= 18 && nationality == "mm"){
    return "U can vote";
  }
  return "U are not allowed to vote";
}

// console.log(canIVote(29,"mm"));
// console.log(canIVote(20,"jp"));


function busNoChoice(busNo){
  if(busNo === 65 || busNo === 20){
    return "U will reach MMS IT Kyauk Myaung";
  }
  return "U will miss";
}

// console.log(busNoChoice(17));
// console.log(busNoChoice(20));
// console.log(busNoChoice(65));
// console.log(busNoChoice(50));


function lunch(food){
  if(food === "hot pot" || food === "malarshangaw"){
    return "U will full"
  }
  return "U will not full";
}

// console.log(lunch("hot pot"));
// console.log(lunch("ice cream"));

// console.log(true);


if(false){
  console.log("this is true");
}


false && console.log("I'm also true");


// if(false){
//   console.log("It is true");
// }else{
//   console.log("It is false");
// }


// false ? console.log("It is also true") : console.log("It is also false");


function addition(x,y){
  // console.log(typeof x,typeof y);
  if(typeof x === "number" && typeof y === "number"){
    return x+y;
  }

  return "incorrect argument"
}

console.log(addition(5,4));
console.log(addition(5,"4"));
