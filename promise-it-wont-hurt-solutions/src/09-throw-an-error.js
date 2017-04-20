function parsePromised (inputString) {
    return new Promise( function (resolve, reject) {
      // Your solution here
          try {
            JSON.parse(inputString)
            resolve('PROMISE VALUE');
          }
          catch (err) {
              console.log('an error occurred -->', err)
              reject(err)
          }
    
   })
}
parsePromised('a')
.then( function (resolveValue) {
  console.log('the promise resolved and returned -->', resolveValue)
})
.catch( function (rejectValue) {
  console.log('the promise was rejected and returned -->', rejectValue)
})
parsePromised('{"a":"b"}')
.then( function (resolveValue) {
  console.log('the promise resolved and returned -->', resolveValue)
})
.catch( function (rejectValue) {
  console.log('the promise was rejected and returned -->', rejectValue)
})