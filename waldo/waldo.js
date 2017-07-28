// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

// refactored
function findWaldo(arr, found) {
  
    arr.forEach(function(name, index) {
        if (name == "Waldo") { found(name, index)}
    });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(name, index) {
  console.log("Good news! We Found " + name + " at index " + index + "!");
});