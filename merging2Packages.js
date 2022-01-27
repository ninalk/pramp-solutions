// Merging 2 Packages
// Given a package with a weight limit limit and an array arr of item weights, implement a 
// function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight 
// limit limit. Your function should return a pair [i, j] of the indices of the item weights, 
// ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

// Example:
// input:  arr = [4, 6, 10, 15, 16],  lim = 21

// output: [3, 1] # since these are the indices of the
//                # weights 6 and 15 whose sum equals to 21

function getIndicesOfItemWeights(arr, limit) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    let weight = arr[i];
    let complement = limit - weight;

    if (complement in seen) {
      return [i, seen[complement]]
    } 
    seen[weight] = i;
  }
  return [];
}

// Time complexity: O(n)
// Space complexity: O(n)