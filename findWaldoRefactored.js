function findWaldo(arr, found) {
  arr.forEach(function(item, i) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index: " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);