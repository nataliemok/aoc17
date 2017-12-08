var testInput = `aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`

function checkDuplicates(str) {
  var arr = str.split('\n');
  var passcodes = arr.map((passcode) => { return passcode.split(' ') });

  var invalidPasscodes = {};

  passcodes.forEach(passcode => {
    passcode.forEach(word => {
      for (var i = passcode.indexOf(word) + 1; i < passcode.length; i++) {
        if (!invalidPasscodes.hasOwnProperty(passcodes.indexOf(passcode)) && compare(word, passcode[i])) {
          // uncomment for debugging // console.log(word, passcode[i], passcode)
          invalidPasscodes[passcodes.indexOf(passcode)] = 'invalid';
        }
      }
    })
  })

  return passcodes.length - Object.keys(invalidPasscodes).length;
}

console.log(checkDuplicates(testInput));

function compare (a, b) {
  var y = a.split("").sort().join("");
  var z = b.split("").sort().join("");

  return z === y
}

