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

it ("Returns the sum of the three numbers that are given", () => {
	expect( Add("1,2,3")).toBe(6);
});

it ("Returns the sum of all the numbers that are given", () => {
	expect( Add("1,2,3,4,1")).toBe(11);
});

it ("Returns the sum of the numbers that are given with New Line", () => {
	expect( Add("1\n2")).toBe(3);
});

/*it ("Negatives numbers are not allowed", function () {
	expect ( function () {
		return Add("2, -2, 5");
	}).to.throw(Error);
});*/

it ("Lets know if there are any negatives numbers", () => {
	expect( Add("1,-2,3")).toThrow( new Error("Negatives not allowed: -2"));
});

it ("Returns the sum of all the numbers that are given but does not take numbers thar are over 1000", () => {
	expect( Add("1,1010,3")).toBe(4);
});





