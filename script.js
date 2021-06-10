function translate(string) {
    // set all characters to lowercase
    string = string.toLowerCase();
    // store an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // if the first letter is a vowel
    if (vowels.includes(string.charAt(0))) {
        // just add way on the end
        return `${string}way`
    } else {
        // look for the first vowel
        let consonantSubString = '';
        // loop for every character in the string
        for (let i = 0; i < string.length; i++) {
            // if the character at this index is a vowel
            if (vowels.includes(string.charAt(i))) {
                // create the translation
                string = `${string.slice(i)}${consonantSubString}ay`
                // I'm done
                break;
            } else {
                // the letter is a consanat, add it to the sub string
                consonantSubString += string.charAt(i);
            }
        }
        return string;
    }
}

//function convertPig(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];









    //    let wordAr = word.split('');
    
//    console.log(wordAr[0]);

//    switch (wordAr[0]) {
//        case ("a" || "e" || "i" || "o" || "u") :
//             return `${word}way`;
//             break;

            
        
//        case "g" :
//        case "p" : 
         
//            let startConst = wordAr[0];
//            wordAr.splice(0, 1);
//            wordAr.push(startConst);
//            let newAr = wordAr.join('');
//            console.log(newAr);
//            return `${newAr}ay`;
//            break;
       
     
           

//    }
//    if(wordAr[1] !== "a" || "e" || "i" || "o" || "u") {
//     let startConst = wordAr[0];
//     let secConst = wordAr[1];
//     wordAr.splice(0, 2);
//     wordAr.push(startConst);
//     wordAr.push(secConst);
//     let newAr = wordAr.join('');
//     console.log(newAr);
//     return `${newAr}ay`;
// }


    // if(wordAr[0] === "a" || "e" || "i" || "o" || "u") {
        
    //     return `${word}way`;
    // }
    // else {
    //     console.log("hello");
    // }
// }

// convertPig("giraffe");

// console.log(wordAr);
//         let startConst = wordAr[0];
//         wordAr.splice(0, 1);
//         wordAr.push(startConst);
//         console.log(wordAr);






//export

module.exports =  {
    translate
}