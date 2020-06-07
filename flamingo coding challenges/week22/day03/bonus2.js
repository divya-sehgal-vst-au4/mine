function subtract(a, b, c, d) {
  return a - b - c - d;
}
function personSubtract(a, b, c) {
  return this.firstName +  + (a - b - c);
}

var person = {
  firstName: 'divya',
};

function flip(func, thisArg) {
  var args = [].slice.call(arguments, 2);
  return function() {
    var args2 = [].slice.call(arguments);
    var main = args.concat(args2).slice(0, func.length).reverse();
    return func.apply(thisArg, main);
  };
}

 var flipFn = flip(personSubtract, person);
    console.log(flipFn(3,2,1)) // "divya subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    console.log(flipFn2(7,8)) // "divya subtracts -4"