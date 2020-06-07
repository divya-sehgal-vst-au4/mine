function ArrayPrinter(arr, delay) {
  var i=0;
  return function printer() {
    if (i < arr.length) {
      console.log(arr[i++]);
      setTimeout(printer, delay);
    }
  }
}

var f = ArrayPrinter([1, 2, 3, 4, 5], 5000);
f();