
function add(a, b) {
  return a + b;
}

function once(func, thisArg) {
var invoking = false;

return function() {
  if (!invoking) {
    invoking = true;
    return func.apply(thisArg, arguments);
  }
};
}

var addOnce = once(add , this);


console.log(addOnce(5, 6))
console.log(addOnce(5, 6))
console.log(addOnce(5, 6))

//////////////////////////////


function doMath(a, b, c) {
    return this.firstName + ' adds ' + (a + b + c);
  }
  
  function oncemore(fn, thisArg) {
    var invoked = false;
  
    return function() {
      if (!invoked) {
        invoked = true;
        return fn.apply(thisArg, arguments);
      }
    };
  }
  
  var instructor = { firstName: 'Pragya' };
  
  var doMathOnce = oncemore(doMath, instructor);
console.log(doMathOnce(1, 2, 3))
console.log(doMathOnce(1, 2, 3))
console.log(doMathOnce(1, 2, 3))


