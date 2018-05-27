module.exports = function(arr) {
  return arr;
};

function bubbleSort(arr) { 
  var length = arr.length; 
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {  
      if(arr[j] > arr[j+1]) { 
        var temp = arr[j]; 
        arr[j] = arr[j+1]; 
        arr[j+1] = temp; 
      } 
    } 
  }
  return arr; 
}

