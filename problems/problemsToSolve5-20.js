// Flatten with recursin
// pascal triangle
// Bubble sort
// Arguments vs params

// review functions
    // .test() -> regex
    // Array.isArray(array) 
    // indexOf()
    // 




const bubbleSortArray = [1,4,2,5,-2,3];
function bubbleSort (array) {
    // newArray = []
    for (let i=1; i < array.length; i++) {
        // console.log(i)
        if (array[i-1] > array[i]) {
            const removed = array[i];
            array.splice(i, 1);
            array.splice(i-1, 0, removed);
            bubbleSort(array);
        }
    }
    return array;
}

console.log(bubbleSort(bubbleSortArray));
