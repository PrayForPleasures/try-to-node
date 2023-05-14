setTimeout(() => console.log("timeout"), 0);

function fib(n) {
	if (n === 0 || n === 1) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(40), performance.now().toFixed(1));
