module.exports = quicksort;

/**
 * Pseudocode: An informal high-level description a computer program or algorithm.
 * (This won't compile! Implement the below functions using JavaScript)
 *
 * quicksort(array, low, high)
 *   if (low < high)
 *     pivot ← partition(array, low, high)
 *     quicksort(array, low, pivot - 1)
 *     quicksort(array, pivot + 1, high)
 */

/**
 * NOTE: quick sort calls itself recursively.
 * Break the list into two lists: those elements less than the pivot element,
 * and those elements greater than the pivot element.
 * This is an in-place sorting implmentation, that means it modifies the array.
 * Rather than returning a sorted copy of the array.
 * @param  {[Number]} array – An array of numbers.
 * @param {Number} low – the low number
 * @param {Number} high – the high number
 */
function quicksort (array, low, high) {

}


/**
 * Pseudocode: An informal high-level description a computer program or algorithm.
 * (This won't compile! Implement the below functions using JavaScript)
 *
 *  Partition(array, low, high)
 *   pivot ← array[low]
 *   left ← low
 *
 *   for i ← low + 1 to high
 *     if (array[i] < pivot)
 *       left ← left + 1
 *       swap(i, left, array)
 *
 *   swap(array, low, left)
 *
 *   return left
 */

/**
 * Recursively sort each of the smaller lists.
 * @param  {[type]} arrayA [description]
 * @param  {[type]} arrayB [description]
 * @return {[type]}        [description]
 */
function partition (array, low, high) {

}

/**
 * Swap the elements at index i and j in an array.
 * @param  {Number} i     First index
 * @param  {Number} j     Second index
 * @param  {[Number]} array An array of numbers
 */
function swap(i, j, array) {

}
