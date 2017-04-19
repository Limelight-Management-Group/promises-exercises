   

    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
	   // function onReject(error) {
	    setTimeout(function(){
      	fulfill('REJECTED!');
      }, 3000)
    });
	   	

	 
   promise.then((failureMessage) => {
	  	console.log(failureMessage);
   })
    