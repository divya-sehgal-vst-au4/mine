function add(a, b, c, d) {
  return a + b + c + d;
}

function nameColor(favoriteColor) {
  return this.firstName +  + favoriteColor;
}

var person = {
  firstName: 'swarnava',
};

function bind(func, thisArg) {
  var args = [].slice.call(arguments, 2);

  return function() {
    var args2 = [].slice.call(arguments);
    return func.apply(thisArg, args.concat(args2));
  };
}

// bind(add, this, 2, 7)(2, 1)
 
 console.log(bind(add,this,1)(2,3,4)) // 10
    console.log(bind(add,this,1,2)(3,4)) // 10
    console.log(bind(add,this,1,2,3)(4)) // 10
    console.log(bind(add,this,1,2,3,4)()) // 10
    console.log(bind(add,this)(1,2,3,4)) // 10
    console.log(bind(add,this)(1,2,3,4,5,6,7,8,9,10)) // 10

    