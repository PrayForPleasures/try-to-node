const fs = require("fs");

let isRunning = true;

setTimeout(() => (isRunning = false), 8);
process.nextTick(() => console.log("next tick"));

function setImmediatePromise() {
	return new Promise((resolve, reject) => {
		setImmediate(() => resolve());
	});
}

async function whileLoop() {
	while (isRunning) {
		console.log("while loop is running");
		await setImmediatePromise();
	}
}

whileLoop().then(() => console.log("while loop ended"));
