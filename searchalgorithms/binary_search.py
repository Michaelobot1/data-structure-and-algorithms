#define the binary search function
def binary_search(arr,X):
    first = 0
    last = len(arr) - 1 
#define the while loop to iterate over the list and check if the target value lies within a range
    while first <= last:
        midpoint = (first + last )//2
        
        if arr[midpoint] == X:
            return midpoint
        elif arr[midpoint] < X:
            first = midpoint + 1
        else:
            last = midpoint - 1
    return -1
    
arr = [2,3,4,5,1,6]
X = 6

result = binary_search(arr,X)
if result == -1 :
    print("your target value's index does not exist")
else:
    print("your target value's index is ",result)
    
    