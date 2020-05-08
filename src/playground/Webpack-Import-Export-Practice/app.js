//import './utils.js';
//Code written before the challenge

/*
import subtract,{ square, add} from './utils.js';

console.log("app is running!!!!!!!"); 
console.log(square(4));
console.log(add(4,200));
console.log(subtract(19,5));
*/

//==Challenge==
//Create person.js
// 1.named export isAdult(18) - true if adult otherwise false.
// 2. named expxort canDrive(18) - true if 21 and over, otherwise false.
// 3.import isAdult and canDrive.
// 4.use both printing results to the console.

/*
import isSenior,{ isAdult, canDrive} from './person.js';

console.log(isAdult(12));
console.log(canDrive(23));
console.log(isSenior(65));
*/

//install validator -> import validator-> use validator

//1.Importing validator
/*
import validator from 'validator';

const email =  "dimitrov9812@abv.bg";

console.log("Email validation - "+ validator.isEmail(email));
*/

//install React and ReactDom-> import React and ReactDom-> use React and ReactDom

import React from 'react'
import ReactDOM from 'react-dom'
import isSenior,{ isAdult, canDrive} from './person.js';

console.log(isAdult(12));
console.log(canDrive(23));
console.log(isSenior(65));

const template =<p>Hello from JSX</p>;
const testDiv = $("#counter-div")[0];
ReactDOM.render(template,testDiv);




