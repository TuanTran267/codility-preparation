function solution(X, Y) {
    // Step 1: Sort the x-coordinates
    let sortedX = X.slice().sort((a, b) => a - b);
    
    // Step 2: Initialize max_gap to 0
    let maxGap = 0;
    
    // Step 3: Compute the maximum gap between consecutive x-coordinates
    for (let i = 1; i < sortedX.length; i++) {
        let gap = sortedX[i] - sortedX[i - 1];
        if (gap > maxGap) {
            maxGap = gap;
        }
    }
    
    // Step 4: Return the maximum gap found
    return maxGap;
}

// Example usage:
console.log(solution([1, 8, 7, 3, 4, 1, 8], [6, 4, 1, 8, 5, 1, 7]));  // Should return 3
console.log(solution([5, 5, 5, 7, 7, 7], [3, 4, 5, 1, 3, 7]));        // Should return 2
console.log(solution([6, 10, 1, 4, 3], [2, 5, 3, 1, 6]));             // Should return 4
console.log(solution([4, 1, 5, 4], [4, 5, 1, 3]));   