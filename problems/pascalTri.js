const rows = 5;

function fibonacci (row) {
    const sequence = []
    for (let i = 0; i < row; i++) {
        // if/else
        // if (!sequence.length) {
        //     sequence.push(0)
        //     sequence.push(1)
        // } else (
        //     sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2])
        // )
        // Ternary
        !sequence.length ? (sequence.push(0), sequence.push(1)) : sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2])
    }

    return sequence
}

// console.log(fibonacci(rows))



// function pascal (row) {
//     const seqArr = []
//     for (let i = 0; i < row; i++) {

//         if (!seqArr.length) {
//             seqArr.push([1]);
//         } else if (seqArr.length === 1) {
//             // console.log("else if")
//             seqArr.push([1,1]);
//             // console.log(seqArr)
//         } else {
//             const currentArray = [...seqArr[seqArr.length - 1]]
//             // console.log("test", seqArr.length)
//             if (seqArr.length % 2 === 0){
//                 const centerIndex = Math.floor(currentArray.length / 2);
//                 const num1 = currentArray[centerIndex-1];
//                 const num2 = currentArray[centerIndex];
//                 currentArray.splice(centerIndex, 0, num1+num2);
//                 seqArr.push(currentArray);
//                 // console.log("arrlength",currentArray, currentArray.length, currentArray.length / 2, Math.floor(currentArray.length / 2) )
//                 // console.log("if var",centerIndex, num1, num2, newArray)
//                 // console.log("if", seqArr)
//             } else {
//                 // console.log("else", seqArr)
                
//                 const centerIndex = Math.floor(currentArray.length / 2)
//                 const num1 = currentArray[centerIndex];
//                 const num2 = currentArray[centerIndex + 1];
//                 currentArray.splice(centerIndex, 0, num1+num2)
//                 seqArr.push(currentArray);
//                 // console.log("else" , newArray)
//             }
//             // seqArr[seqArr.length - 1];
//         }
//     }

//     return seqArr;
// }

// console.log(pascal(rows))
// pascal(rows)
// const test = [[1],[1,1,1,1]]
// console.log(test[test.length - 1].length)


function pascal (row) {

    let i = 1;
    while (row > i) {
        if (i === 1) {

        } else {


        }
        let x = 1;
        while ( x < i) {
            
            
            x++;
        }
        i++;
    }
} 