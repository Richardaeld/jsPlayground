const array = [1,1,1,1,2,2,2,2,2,3,3,3,3,34,4,4,4,4,45,5,5,5,5,5,6,6,6,6,6,6,];


function removeDups (arr) {
    return array1 = [...new Set(arr)].sort((a,b) => a - b)
}

console.log(removeDups(array))

