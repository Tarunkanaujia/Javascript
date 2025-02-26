// Reversing a String Using reverse()
// Since reverse() is an array method, you can't use it directly on strings.
// You need to split the string into an array, reverse it, and join it back.


let text = "hello";
let reversedText = text.split("").reverse().join("");

console.log(reversedText); // Output: "olleh"


//  1. split("") → Converts the string into an array of characters.
//  2. reverse() → Reverses the array.
//  3. join("") → Converts the array back into a string.