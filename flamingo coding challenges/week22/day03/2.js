function add(a, b) {
  return a + b;
}



function invoking(func, num) {
  var counter = 0;
  return function() {
    counter++;
    if (counter > num) {
      return 'Maxed Out!';
    }
    return func.apply(this, arguments);
  };
}

var threeTimes = invoking(add,3);
console.log(threeTimes(1,2));
console.log(threeTimes(2,2));
console.log(threeTimes(1,2));
console.log(threeTimes(1,2));