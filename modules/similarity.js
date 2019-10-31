/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/**
 * Creates 2d array with given rows and cols and initializes all elements to -1
 * @param {*} rows
 * @param {*} cols
 */
function create2DArray(rows, cols) {
  const array = new Array(rows);

  for (let i = 0; i < rows; i++) {
    array[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      array[i][j] = -1;
    }
  }
  return array;
}

/**
 * Uses the string matching algorithm to calculate similarity between two texts
 * @param {*} input1
 * @param {*} input2
 * @param {*} x
 * @param {*} y
 * @param {*} dp
 */
function calcSimilarity(input1, input2, x, y, dp) {
  // If either of the array of words is empty, return length of remaining
  if (x === 0) {
    return y;
  }

  if (y === 0) {
    return x;
  }

  // If value previously calculated, return that
  if (dp[x - 1][y - 1] != -1) {
    return dp[x - 1][y - 1];
  }

  // If the last words in both arrays are same, exclude and recursively find similarity in rest of text
  if (input1[x - 1] === input2[y - 1]) {
    dp[x - 1][y - 1] = calcSimilarity(input1, input2, x - 1, y - 1, dp);
    return dp[x - 1][y - 1];
  }

  // If last words are different, return minimum of adding, deleting and replacing words
  dp[x - 1][y - 1] =
    1 +
    Math.min(
      calcSimilarity(input1, input2, x, y - 1, dp), // Add word1
      calcSimilarity(input1, input2, x - 1, y, dp), // Delete word1
      calcSimilarity(input1, input2, x - 1, y - 1, dp) // Replace word1
    );
  return dp[x - 1][y - 1];
}

function checkSimilarity(string1, string2) {
  // Split into array of words
  const input1 = string1.split(/\s+/);
  const input2 = string2.split(/\s+/);

  const x = input1.length;
  const y = input2.length;

  const dp = create2DArray(x, y);

  const similarity = calcSimilarity(input1, input2, x, y, dp);
  const max = Math.max(x, y);

  return (max - similarity) / max;
}

module.exports = {
  checkSimilarity,
};
