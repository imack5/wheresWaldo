// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him @ index", index, '\b!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);