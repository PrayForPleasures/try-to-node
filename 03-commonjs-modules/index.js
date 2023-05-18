// console.log(arguments.callee.toString());

// console.log("Dm");

// console.log(__filename);
// console.log(__dirname);

// console.log(module);

// console.log(exports);
// console.log(exports === module.exports);

// console.log(require);
// console.log(require.extensions);

function printHi() {
	console.log("Hi");
}

module.exports.printHi = printHi;
