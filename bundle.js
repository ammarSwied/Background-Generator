(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// *get the h3 so we can display the result rgb value
let h3Value = document.querySelector("h3");

//* get the body so we can change the background
let body = document.querySelector(".body");

// *get the input values
let color1 =  document.querySelector(".color1");
let color2 = document.querySelector(".color2");


//* create a function that changes the color

// const setColor = () => {

//     body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value});`
//     h3Value.textContent = `${body.style.background};`
// }

function setColor() {

    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    h3Value.textContent = body.style.background + ";";
}

// *? set event to color1
color1.addEventListener("input" , setColor);

// *? set event to color2
color2.addEventListener("input" , setColor);

// const persons = {
//     fistname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyeColor: "blue",
// }


//! new syntax for javascript
// const { fistname , lastname, age , eyeColor} = persons;

// console.log(fistname);
// console.log(lastname);
// console.log(age);
// console.log(eyeColor);

// let a = "test";
// let b = true;
// let c = 789;

// const okObj = {
//     a,
//     b,
//     c,
// }

// console.log(okObj);

// const whereAmI = (username,location) => {
//     if (username && location)
//     {
//         return "I am not lost!";
//     }
//     else{
//         return "I am totally Lost!";
//     }
// }

// const compose = (f, g) => (a) => f(g(a));

// const addOne = (num) => num + 1;

// const multiBy2 = (num) => num * 2;

// //we want give 5 and return 9

// compose(addOne,multiBy2) (5);
// // 5 * 2 = 10
// // 10 + 1 = 11

},{}]},{},[1]);
