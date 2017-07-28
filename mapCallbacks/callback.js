var words = ["ground", "control", "to", "major", "tom"];

function map (arr, action) {

    let output = [];

    arr.forEach(function(i) {
        output.push(action(i));
    });

    return output;
}

console.log(map(words, function(word) {
  return word.length;
}));