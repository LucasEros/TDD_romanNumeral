var baseChar = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

exports.arabicConvert = (romanNumeral) => {
  var res = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    var index = baseChar[romanNumeral[i]];
    var prevIndex = baseChar[romanNumeral[i - 1]];

    if (prevIndex < index) {
      res = index - prevIndex;
    } else {
      res += index;
    }
  }
  return res;
};
