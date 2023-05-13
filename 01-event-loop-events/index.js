const fs = require("fs");
const dns = require("dns");

function timeStamp() {
	return performance.now().toFixed(2);
}

console.log("start");

// timeouts
setTimeout(() => {
	console.log("txt-timeout-1", timeStamp());
}, 0);

setTimeout(() => {
	process.nextTick(() => console.log("next-tick-2", timeStamp()));
	console.log("txt-timeout-2", timeStamp());
}, 10);

// close events
fs.writeFile("./test.txt", "hello, NODE.js", () =>
	console.log("file written", timeStamp())
);

// promises
Promise.resolve().then(() => {
	console.log("promise 1", timeStamp());
});

// next tick
process.nextTick(() => console.log("next tick 1", timeStamp()));

//set immediate
setImmediate(() => console.log("immediate 1", timeStamp()));

// i/o events
dns.lookup("localhost", (err, address, family) => {
	console.log("dns 1 localhost", address, timeStamp());
});

console.log("end");
