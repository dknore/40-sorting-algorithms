module.exports = function(arr) {
  return arr;
};

function mergeSortTopDown(arr) {
  if(arr.length < 2) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
  var arr = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.slice()).concat(right.slice());
}

function mergeSortBottomUp(arr) {
  var step = 1;
  while (step < arr.length) {
    var left = 0;
    while (left + step < arr.length) {
      mergeBottomUp(arr, left, step);
      left += step * 2;
    }
    step *= 2;
  }
  return arr;
}
function mergeBottomUp(arr, left, step) {
  var right = left + step;
  var end = Math.min(left + step * 2 - 1, arr.length - 1);
  var leftMoving = left;
  var rightMoving = right;
  var temp = [];

  for (var i = left; i <= end; i++) {
    if ((arr[leftMoving] <= arr[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
      temp[i] = arr[leftMoving];
      leftMoving++;
    } else {
      temp[i] = arr[rightMoving];
      rightMoving++;
    }
  }

  for (var j = left; j <= end; j++) {
    arr[j] = temp[j];
  }
}