// Toeplitz Matrix
// A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same 
// element. Given a non-empty matrix arr, write a function that returns true if and only if 
// it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

// For example,
// [[1,2,3,4],
//  [5,1,2,3],
//  [6,5,1,2]]

// is a Toeplitz matrix, so we should return true, while

// [[1,2,3,4],
//  [5,1,9,3],
//  [6,5,1,2]]

// isn’t a Toeplitz matrix, so we should return false.

function isToeplitz(arr) {
	let row = arr.length;
  let col = arr[0].length;
  
  if (row === 1) return true;
  
  // Iterate thru arr
    // if values diagonal to current value are same, return true
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < col - 1; j++) {
      let curr = arr[i][j];
      if (curr !== arr[i+1][j+1]) {
        return false;
      }
    }
  }
  return true;
}
