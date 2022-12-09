// Merge function for merging two sorted arrays
function merge(left: number[], right: number[]): number[] {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Loop through both arrays, adding the smaller value to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add the remaining values from the left array to the result
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  
    // Add the remaining values from the right array to the result
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  
    return result;
  }
  
  // Merge sort function
  function mergeSort(arr: number[]): number[] {
    // Base case: array of length 0 or 1 is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    // Recursively sort the left and right halves
    left = mergeSort(left);
    right = mergeSort(right);
  
    // Merge the sorted left and right halves
    return merge(left, right);
  }
  
  // Example usage
  let arr = [7, 8, 5, 3, 1];
  let sorted = mergeSort(arr);
  console.log(sorted); // [1, 2, 3, 4, 5, 6]