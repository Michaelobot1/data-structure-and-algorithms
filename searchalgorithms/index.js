//define the function search with parameter arr N X
function search (arr, N, X){
    for(i= 0 ; i < N ; i++){
      if (arr[i] == X){
        return i
      } 
    }
    return -1
}
//initliaze the variables required,the arr, the length of the array N,the target value
let arr = [1,1,1,2,4,5,6,7,8,6,7,6,5,5,7,7,3];//dummy array
let N = arr.length;
let X = 3;

//let results be equal to the function search call
results = search(arr, N, X)
//write a conditional statement based on the output of th search function
if (results == -1){
  console.log('your target value does not exist');
}
else{
  console.log("your target value's index is", results);
}
