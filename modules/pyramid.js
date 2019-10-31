/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/**
 * Checks if input is a pyramid word
 * @param {*} input
 */
function checkPyramid(input) {
  const frequencies = []; // Counts how many times each letter appears in the input string

  // Iterate over string and build frequency table of characters
  for (let i = 0; i < input.length; i++) {
    const c = input.charAt(i);

    const index = frequencies.findIndex(x => x.character === c);
    if (index === -1) {
      frequencies.push({
        character: c,
        count: 1,
      });
    } else {
      frequencies[index].count += 1;
    }
  }

  // Sort by count
  frequencies.sort((a, b) => (a.count > b.count ? 1 : -1));

  // Check if pyramid word
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i].count != i + 1) {
      return false;
    }
  }

  // console.log(frequencies);
  return true;
}

module.exports = {
  checkPyramid,
};
