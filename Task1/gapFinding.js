/**
 * There are N trees (numbered from 0 to N−1) in a forest. The K-th tree is located at coordinates (X[K], Y[K]).

We want to build the widest possible vertical path, such that there is no tree on it. The path must be built somewhere between a leftmost and a rightmost tree, which means that the width of the path cannot be infinite.

What is the width of the widest possible path that can be built?

Write a function:

function solution(X, Y);

that, given two arrays X and Y consisting of N integers each, denoting the positions of trees, returns the width of the widest possible path that can be built.

Examples:

1. Given X=[1, 8, 7, 3, 4, 1, 8], Y=[6, 4, 1, 8, 5, 1, 7], the function should return 3.

The picture illustrates the first example test.

2. Given X=[5, 5, 5, 7, 7, 7], Y=[3, 4, 5, 1, 3, 7], the function should return 2.

The picture illustrates the second example test.

3. Given X=[6, 10, 1, 4, 3], Y=[2, 5, 3, 1, 6], the function should return 4.

The picture illustrates the third example test.

4. Given X=[4, 1, 5, 4], Y=[4, 5, 1, 3], the function should return 3.

The picture illustrates the fourth example test.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of arrays X and Y is an integer within the range [0..1,000,000,000];
there are no two trees with the same coordinates;
a path of width at least 1 can always be built.
*/
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