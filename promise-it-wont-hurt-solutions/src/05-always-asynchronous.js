 var promise = new Promise(function (resolve, reject) {
      // Your solution here
	   
      	resolve('PROMISE VALUE');
    
    })
    promise.then((successMessage) => {
    	console.log(successMessage);
    }).catch((failureMessage) => {
	  	console.log('I DID NOT FIRE');
  })
console.log('MAIN PROGRAM');