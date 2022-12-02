// Problem #1: Frequency Counter Pattern
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
// majority element always exists in the array.
// Please solve using a linear time complexity and using the frequency counter pattern
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// @param { number[] } nums
// @return { number }


// const solution = (nums) => {
//     let frequency = {}
//     for (let num of nums) {
//         frequency[num] = (frequency[num] || 0) + 1;
//         if (frequency[num] > (nums.length / 2)) return num
//     }
// }

// console.log(solution([2, 2, 1, 1, 1, 2, 2]))


// Problem #2: Divide and Conquer Pattern
// sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.
// Please write in time complexity of O(log n)
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].
const binaryIterativeSearch = (nums, target) => {
    if (!nums.length) return -1

    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (nums[middle] < target) {
            start = middle + 1
        } else if (nums[middle] > target) {
            end = middle - 1
        } else {
            return middle
        }
    }

    return -1
}
// console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 9)) // 4
// console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 12)) // 5 
// console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], -1)) // 0




// Given a sorted asc array of nums, and a target value, write a function that searches for the
// target in nums, and return the target index, otherwise, return -1 if not found

// const arr1 = [1, 2, 3, 4, 5, 6, 8, 9]
// const target = 5; 

// arr1.find(num => num === target) // O(n)

// // time complexity O(log n)
// // space complexity O(1)
// const binarySearch = (nums, target) => {
//     // step 1: edge case
//     if (!nums.length) return -1 

//     // initialize our pointers at the ends of the array
//     let start = 0; 
//     let end = nums.length - 1; 

//     //set up our while loop, where it exits when start > end which means there is no target value in the array
//     while (start < end) {
//         // find the middle index 
//         let middleIndex = Math.floor((start + end)/2)

//         //first check if the middle value is equal to target
//         if (nums[middleIndex] === target) {
//             return middleIndex; 
//         } else if (nums[middleIndex] < target) {
//             start = middleIndex + 1
//         } else {
//             end = middleIndex - 1
//         }
//     }

//     return -1;
// }