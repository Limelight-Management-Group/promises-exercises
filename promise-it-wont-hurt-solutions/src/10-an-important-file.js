function alwaysThrows() {
	throw new Error( 'OH NOES' )
}

function iterate(num) {
	alert(num)
	return num + 1
}
function drop(num) {
	alert(num)
	return num - 3
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(drop)
.then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
.then(alwaysThrows) 
.catch(console.log)