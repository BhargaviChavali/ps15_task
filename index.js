// 1 :  Input: nums = [1,1,2]
// Output:[1,2,_]
// Explanation: Insert the underscores equal number of duplicates in the array.
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,,,,,_]

// Code :

function removeDuplicates(num) {
    if (num.length==0) return 0;
    let uni=0;
    for(let i=0;i< num.length; i++) {
        if (i==0||num[i]!==num[i-1]) {
            num[uni]=num[i];
            uni++;
        }
    }
    for(let j=uni;j<num.length; j++) {
        num[j]="_";
    }
    return uni;
}
let num1 = [1, 1, 2];
removeDuplicates(num1);
console.log(num1);
let num2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(num2);
console.log(num2);


// 2 : Input: nums = [3,2,2,3]
// Input2: val = 3
// Output:[2,2,_,_]
// Explanation: Insert under scores which are equal to occurences of input 2 value

// Code :

function removeElement(arr,value) {
    let s=0;
    for (let i=0; i<arr.length;i++) {
        if (arr[i]!==value) {
            arr[s]=arr[i];
            s++;
        }
    }
    for (let i=s; i<arr.length;i++) {
        arr[i]="_";
    }
    
    return arr;
}
let arr1=[3, 2, 2, 3];
let value1=3;
console.log(removeElement(arr1, value1)); 

