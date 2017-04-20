//  Parse.User.logIn('user', 'pass').then(function (user) {
//       return query.find();
//     }).then(function (results) {
//       return results[0].save({ key: value });
//     }).then(function (result) {
//       // the object was saved
//     });

// function timeFunc() {
//   console.log('TIMED OUT!');
// }

// setTimeout(timeFunc, 3000);

function first(){
  return new Promise(resolve =>{
    setTimeout(() =>{
      resolve("the first one...")
    }, 1000)
  });
}
function second(){
  return new Promise(resolve =>{
    setTimeout(() =>{
      resolve("the second one...")
    }, 1000)
  });
}
function third(){
  return new Promise(resolve =>{
    setTimeout(() =>{
      resolve("the third one...")
    }, 1000)
  });
}

first().then(second =>{
  console.log(second)
})
second().then(third =>{
  console.log(third)
})
third().then(fourth =>{
  console.log('done and done...')
})