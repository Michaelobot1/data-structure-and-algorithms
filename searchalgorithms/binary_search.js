// define the binary search function
function binarySearch(arr, X) {
    let first = 0;
    let last = arr.length - 1;
    // define the while loop to iterate over the list and check if the target value lies within a range
    while (first <= last) {
        let midpoint = Math.floor((first + last) / 2);
        
        if (arr[midpoint] === X) {
            return midpoint;
        } else if (arr[midpoint] < X) {
            first = midpoint + 1;
        } else {
            last = midpoint - 1;
        }
    }
    return -1;
}

let arr = [2, 3, 4, 5, 1, 6];
let X = 6;

let result = binarySearch(arr, X);
if (result === -1) {
    console.log("your target value's index does not exist");
} else {
    console.log("your target value's index is ", result);
}

