const fs = require("fs");
const dns = require("dns");

function info(text) {
	console.log(text, performance.now().toFixed(2));
}

console.log("start");

// close events
fs.writeFile("./test.txt", "hello, NODE.js", () => info("file written"));

// promises
Promise.resolve().then(() => {
	info("promise 1");
});

// next tick
process.nextTick(() => info("next tick 1"));

//set immediate
setImmediate(() => info("immediate 1"));

// timeouts
setTimeout(() => {
	info("timeout 1");
}, 0);

setTimeout(() => {
	process.nextTick(() => info("next tick 2"));
	info("timeout 2");
}, 100);

// intervals

let intervalCount = 0;
const interval = setInterval(() => {
	info(`interval ${(intervalCount += 1)}`);
	if (intervalCount === 2) {
		clearInterval(interval);
	}
}, 50);

// i/o events
dns.lookup("localhost", (err, address, family) => {
	info("dns 1 localhost", address);
	Promise.resolve().then(() => info("promise 2"));
	process.nextTick(() => info("next tick 3"));
});

console.log("end");
