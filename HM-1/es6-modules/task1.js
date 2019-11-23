import { createInterface } from 'readline';

const rl = createInterface({
	input: process.stdin,
	output: null
});

rl.on("line", function(line) {
	console.log(
		line
			.split("")
			.reverse()
			.join("")
	);
});
