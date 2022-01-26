// Move Zeros To End
// Given a static-sized array of integers arr, move all zeroes in the array to the end of 
// the array. You should preserve the relative order of items in the array.

// We should implement a solution that is more efficient than a naive brute force.

// Examples:

// input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
// output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

// SOLUTION 1:
function moveZerosToEnd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num === 0) {
      arr.splice(arr.indexOf(num), 1);
      arr.push(0);
    }
  }
  return arr;
}

// Time complexity: O(N)
// Space complexity: O(1)