

function ceasarCipher (s, k) {

    const alpha = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r" , "s", "t", "u","v","w","x","y","z"]
    const alphaUpper = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R" , "S", "T", "U","V","W","X","Y","Z"]
    const newString = [];



    for (let i = 0; i < s.length; i++) {
        let alphaPlace = alpha.indexOf(s[i]);
        let upperAlphaPlace = alphaUpper.indexOf(s[i]);

        
        if (alphaPlace === -1 && upperAlphaPlace === -1) {
            newString.push(s[i])
            
        } else if (alphaPlace === -1){
            console.log(upperAlphaPlace)
            if (upperAlphaPlace + k >= alpha.length) {
                for (let iter = 0; iter <= k; iter++) {
                    if (upperAlphaPlace >= alpha.length) {
                        upperAlphaPlace = 0;
                    } else {
                        upperAlphaPlace++;
                    }
                }
                newString.push(alphaUpper[upperAlphaPlace])
            } else {
                upperAlphaPlace = upperAlphaPlace + k;
                newString.push(alphaUpper[upperAlphaPlace])
            }

        } else if (upperAlphaPlace === -1 ) {
            if (alphaPlace + k >= alpha.length) {
                for (let iter = 0; iter <= k; iter++) {
                    if (alphaPlace >= alpha.length) {
                        alphaPlace = 0;
                    } else {
                        alphaPlace++;
                    }
                }
                newString.push(alpha[alphaPlace])
            } else {
                alphaPlace = alphaPlace + k;
                newString.push(alpha[alphaPlace])
            }
        }
    }
    return newString.join("")
}

let s = "There's-a-starman-waiting-in-the-sky";
// let s ="sky"
let k = 3;
console.log(ceasarCipher(s,k));