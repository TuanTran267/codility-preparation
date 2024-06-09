const asphaltPatches = (arr) => {
    
    if (arr.length === 0 || !arr.split('').some((item) => item === 'X')) return 0;
    if (arr.split('').every((item) => item === 'X')) return Math.ceil(arr.length/3);

    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 'X') {
            i = i + 3;
            count++;
        } else {
            i++;
        }
    }

    return count;
}


console.log(asphaltPatches('X.X....X.XX.XX'));  // Should return 3
console.log(asphaltPatches('......'));  // Should return 0
console.log(asphaltPatches('X.XXXX.X.X'));  // Should return 1