// function all(promises) {
// 	console.log(promises)
//     let counter = 0
// 		// let promises = []
    
// 	  function count() {
// 			// counter++
// 			if (counter === 2) resolve(promises)
// 		}
	
// 	return new Promise((resolve, reject) => {
	

// 		promises[0]
// 		.then((val) => { 
// 			// promises[0] = val
// 			counter ++
// 		})

// 	console.log(counter)
		
// 		promises[1]
// 		.then((val) => { 
// 			// promises[1] = val
// 			counter++
// 		})
// 	})

// 	count()
// }

function all(para1, para2){

  return new Promise(function(resolve, reject){

    var counter = 0;
    var promiseArr = [];

    para1.then(function(result){
      promiseArr.push(result);
      counter ++;
      if(counter === 2){
        resolve(promiseArr);
      }
    });

    para2.then(function(result){
      promiseArr.push(result);
      counter ++;
      if(counter === 2){
        resolve(promiseArr);
      }
    });


  });


  }





all(getPromise1(), getPromise2()).then(console.log);