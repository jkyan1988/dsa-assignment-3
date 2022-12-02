<h1>Problem #1: Frequency Counter Pattern</h1>
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. <br>
You may assume that the majority element always exists in the array.
Please solve using a linear time complexity and using the frequency counter pattern
<br>
Example 1:
Input: nums = [3,2,3]
Output: 3<br>
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2<br>
Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109<br>
 @param {number[]} nums<br>
 @return {number}



    const solution = (nums) => {
    let frequency = {}
    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > (nums.length / 2)) return num
    }
    }

    console.log(solution([2, 2, 1, 1, 1, 2, 2])) // 2
    console.log(solution([3,2,3])) // 3



<h1>Problem #2: Divide and Conquer Pattern</h1>
Sorted (in ascending order) integer array nums of n elements 
and a target value, write a function to search target in nums. <br>
If target exists, then return its index, otherwise return -1.<br>
Please write in time complexity of O(log n)<br>
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4<br>
Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1<br>
Note:
You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].

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
    console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 9)) // 4
