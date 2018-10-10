// test.test.js

const Add = require( "./kata_steps");

it ("Return zero if if the string is empty", () => { 
	expect( Add("")).toBe(0);
});

it ("Return the number if the number is alone", () => {
	expect( Add("2")).toBe(2);
});

it ("Returns the sum of the two numbers that are given", () => {
	expect( Add("1,3")).toBe(4);
});

it ("Returns the sum of the two numbers that are given", () => {
	expect( Add("1,2,3")).toBe(6);
});