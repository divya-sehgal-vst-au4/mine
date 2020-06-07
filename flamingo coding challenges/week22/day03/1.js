function sumEvenArguments() {
  var sum = 0;
  var num = [].slice.call(arguments);
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum += num[i];
    }
  }
  return sum;
}

sumEvenArguments(1,2,3,4) // 6
    