
// Ques 001:- Trim it and convert it to UpperCase 

let msg = "   Helloworld  ";
console.log(msg.trim().toUpperCase()); // HELLOWORLD , This is method chaining.Using one method after another. 


//Ques 002:-  For the string ->  let name = "TYROCODER" predict the output for following.


let name = "TYROCODER";
console.log(name.slice(3,6))     // OCO
console.log(name.indexOf("CO"))  // 4
console.log(name.replace("CODER","LEARNER"))   // TYROLEARNER
console.log(name.slice(4).replace("R","X"))     // CODEX
