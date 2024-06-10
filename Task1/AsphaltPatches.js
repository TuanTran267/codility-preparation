const asphaltPatches = (arr) => {
    
    // If the array is empty or there is no 'X' in the array, return 0
    if (arr.length === 0 || !arr.split('').some((item) => item === 'X')) return 0;
    
    // If all the elements in the array are 'X', return the ceiling of the length of the array divided by 3
    if (arr.split('').every((item) => item === 'X')) return Math.ceil(arr.length/3);

    let count = 0;
    let i = 0;
    // Loop through the array
    while (i < arr.length) {
        // If the current element is 'X', increment i by 3 and increment count by 1
        if (arr[i] === 'X') {
            i = i + 3;
            count++;
            // If the current element is not 'X', increment i by 1
        } else {
            i++;
        }
    }

    return count;
}


console.log(asphaltPatches('X.X....X.XX.XX'));  // Should return 3
console.log(asphaltPatches('......'));  // Should return 0
console.log(asphaltPatches('X.XXXX.X.X'));  // Should return 1