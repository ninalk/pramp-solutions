// Island Count
// Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns 
// the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is 
// considered adjacent to another cell if they are next to each either on the same row or column. 
// Note that two values of 1 are not part of the same island if they’re sharing only a mutual 
// “corner” (i.e. they are diagonally neighbors).

// Explain and code the most efficient solution possible and analyze its time and space complexities.

// Example:
// input:  binaryMatrix = [ [0,    1,    0,    1,    0],
//                          [0,    0,    1,    1,    1],
//                          [1,    0,    0,    1,    0],
//                          [0,    1,    1,    0,    0],
//                          [1,    0,    1,    0,    1] ]
// output: 6 # since this is the number of islands in binaryMatrix.
//           # See all 6 islands color-coded below.

function getNumberOfIslands(binaryMatrix) {
  let row = binaryMatrix.length,
    col = binaryMatrix[0].length,
    islandCount = 0;

  // loop through binaryMatrix and use DFS on undirected graph
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (binaryMatrix[r][c] === 1) {
        islandCount++;
        checkNeighbors(r, c, binaryMatrix);
      }
    }
  }

  return islandCount;
}

function checkNeighbors(row, col, matrix) {
  // check boundaries
  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
    return;
  }

  // check neighbors top, bottom, left, and right of current val
  const curr = matrix[row][col];
  
  if (curr === 1) {
    matrix[row][col] = -1;
    checkNeighbors(row - 1, col, matrix) // check top
    checkNeighbors(row + 1, col, matrix) // check bottom
    checkNeighbors(row, col - 1, matrix) // check left
    checkNeighbors(row, col + 1, matrix) // check right
  }
}

// Time complexity: O(N*M) where N and M are the number of rows and columns. Therefore, time
// complexity is linear in the size of the input.

// Space complexity: O(1) since no extra space is being used