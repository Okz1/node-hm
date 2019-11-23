"use strict";

var _readline = require("readline");

var rl = (0, _readline.createInterface)({
	input: process.stdin,
	output: null
});

rl.on("line", function (line) {
	console.log(line.split("").reverse().join(""));
});