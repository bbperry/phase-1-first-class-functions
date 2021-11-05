function receivesAFunction (cb, num) {
      cb(num)
      return
}

function returnsANamedFunction () {
  return receivesAFunction
}

function returnsAnAnonymousFunction () {
  return () => "Hi"
}


// function receivesAFunction (callback) {
//   callback();
// }

// function returnsANamedFunction() {
// return receivesAFunction
// }

// function returnsAnAnonymousFunction(){
// return function(){
//   return
// }
// }
