/**
 * An array A consisting of N integers is given. 
 * Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. 
 * For example, the rotation of the array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. 
 * The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
 * Write a function:

def solution(A, K):
    # your code here
that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

Examples
Given A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].

Given A = [0, 0, 0] and K = 1, the function should return [0, 0, 0].

Given A = [1, 2, 3, 4] and K = 4, the function should return [1, 2, 3, 4].

Assumptions
N and K are integers within the range [0..100].
Each element of array A is an integer within the range [−1,000..1,000].
Constraints
In the case where N is 0 (i.e., the array is empty), the function should return an empty array.
Rotating an array by its length N (or multiples of N) results in the same array.
*/

function solution(A, K) {
    // Step 1: If the array is empty, return an empty array
    if (A.length === 0) {
        return A;
    }
    
    // Step 2: Compute the effective number of rotations
    let effectiveRotations = K % A.length;
    
    // Step 3: Rotate the array
    return A.slice(-effectiveRotations).concat(A.slice(0, -effectiveRotations));
}

console.log(solution([3, 8, 9, 7, 6], 3));  // Should return [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1));        // Should return [0, 0, 0]  
console.log(solution([1, 2, 3, 4], 4));     // Should return [1, 2, 3, 4]  
console.log(solution([], 4));     // Should return []