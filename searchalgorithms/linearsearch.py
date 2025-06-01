# create a function called search with three arguments i.e that is the array, the length of the array, the target value of the search 
#inside this search function,run a for loop that iterates over the values of the array
# if a value of the array is equal to the target value,return the index 
# if the target value is not inside the array,then return -1 
def linear_search(arr, N, X): 
    for i in range(0,N):
        if (arr[i]== X):
          return i
    return -1
#define the array
arr = []
#define the length of the array
N = len(arr)
#define the target value of the search
X = 4
#the result is equal to the function call search
result = linear_search(arr, N, X)
#if the result is = -1, print the target value is not in the array,else print the index 0f the target value
if result == -1 :
   print("The target value is not found")
else:
   print("The target value's index is " , result)