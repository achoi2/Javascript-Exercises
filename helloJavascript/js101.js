var hello = function (name) {
    return 'hello ' + name
};

// let hello = (name) =>  'hello ' + name;

console.log(hello('mustache'));

var hello = function(name) {
  if (name === "") {
    return "Hello World";
  } else {
    return "hello " + name;
  }
};

// let hello = name => {
//   if (name === "") {
//     return "Hello World";
//   } else {
//     return "hello " + name;
//   }
// };

console.log(hello(""));

var madlib = function (name, subject) {
    return name + 's favorite subject in school is ' + subject
}

// let madlib = (name, subject) => `${name}'s favorite subject in school is ${subject}`


console.log(madlib('andrew', 'math'))

var tipAmount = function(amount, level) {
  var good = amount * 0.2;
  var fair = amount * 0.15;
  var bad = amount * 0.1;
  if (level === "good") {
    return good;
  } else if (level === "fair") {
    return fair;
  } else if (level === "bad") {
    return bad;
  }
};

console.log(tipAmount(100, "bad"));

var tipAmount = function(amount, level) {
    var good = amount * 0.2;
    var fair = amount * 0.15;
    var bad = amount * 0.1;
    if (level === "good") {
      return good + amount;
    } else if (level === "fair") {
      return fair + amount;
    } else if (level === "bad") {
      return bad + amount;
    }
  };

  console.log(tipAmount(100, "good"));

var splitAmount = function(amount, level, numppl) {
  var good = amount * 0.2;
  var fair = amount * 0.15;
  var bad = amount * 0.1;
  if (level === "good") {
    return (good + amount) / numppl;
  } else if (level === "fair") {
    return (fair + amount) / numppl;
  } else if (level === "bad") {
    return (bad + amount) / numppl;
  }
};

console.log(splitAmount(100, 'bad', 6));
