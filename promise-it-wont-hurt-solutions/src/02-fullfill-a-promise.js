'use strict';
    
    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout(function(){
      	fulfill('FULFILLED!');
      })

    }, 3000);
    promise.then((successMessage) => {
    	console.log(successMessage);
    });
    
 

    
    // Your solution here

//     es6Promise = require('es6-promise');
// 'use strict';

    
//     var promise = new Promise(function (fulfill, reject) {
//       setTimeout(function(){
//       	fulfill('FULFILLED!');
//       })

//     }, 300);