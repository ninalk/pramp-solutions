// Matrix Spiral Copy
// Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies 
// inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should 
// return that array. Analyze the time and space complexities of your solution.

// Example:

// input:  inputMatrix  = [ [1,    2,   3,  4,    5],
//                          [6,    7,   8,  9,   10],
//                          [11,  12,  13,  14,  15],
//                          [16,  17,  18,  19,  20] ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

function spiralCopy(inputMatrix) {
  let output = [],
    top = 0,
    bottom = inputMatrix.length - 1,
    right = inputMatrix[0].length - 1,
    left = 0;

  while (top <= bottom && left <= right) {
    // starting from top, go left to right
    for (let i = left; i <= right; i++) {
      output.push(inputMatrix[top][i]);
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      output.push(inputMatrix[i][right]);
    }
    right--;

    // if top is less than equal to bottom, go right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        output.push(inputMatrix[bottom][i]);
      }
    }
    bottom--;

    // if right is less than equal to left, go bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        output.push(inputMatrix[i][left]);
      }
    }
    left++;
  }

  return output;
}

// Time complexity: O(N*M) where N is number of rows and M is number of columns
// Space complexity: O(N*M) since size of input is also linear O(N*M)