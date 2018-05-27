module.exports = function(arr) {
  return arr;
};

function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  var pivot = partitionHoare(array, left, right);

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if(right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}
