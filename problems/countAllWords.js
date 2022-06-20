// Count each word and times it appears
const str = "Every good boy; does fine. Every good boy does fine. Every good boy every does? fine. Every! good, boy does fine. Every good boy does."
const test = "abds sfe afe"
const test1 = 1

function countWords (string) {

    // let totalWords = 0;
    const wordCounts = {totalWords:0}

    const wordArray = string.split(" ");

    wordArray.forEach(element => {
        let word = []
        const elementArray = element.split("")
        elementArray.forEach(letter => {
            if ((/[a-zA-Z]/).test(letter)) {
                // letter = toLowerCase(letter);
                word.push(letter.toLowerCase())
            }
        })
        word = word.join('');
        if (wordCounts[word]) {
            wordCounts[word] += 1;
        } else {
            wordCounts[word] = 1;
        }
        wordCounts['totalWords'] += 1;
    })


    console.log(wordCounts)
    // console.log((/[a-zA-Z]/).test(string))
}

countWords(str)
// countWords(test1)

// regex for check
// use space for word seperation
