function all(promise1, promise2) {
    this.counter = 0
		let promises = []
    
	  function count() {
			counter++
			if (counter === 2) resolve(promises)
		}
	
	return new Promise((resolve, reject) => {
	

		promise1
		.then((val) => { 
		// 	promises[0] = val
			counter ++
		})
console.log(counter)
		promise2
		.then((val) => { 
			promises[1] = val
			count()
		})
	})
}