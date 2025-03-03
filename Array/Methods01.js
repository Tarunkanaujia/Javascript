// Methods in js


// PUSH :-  Add to end  -----------------

let Vegitable = ["Aloo","Tamatar","Gobhi","kaddu","Bhindi"];
Vegitable.push("palak");
console.log("When we push Method:- ",Vegitable);

// UNSHIFT :- Add to start  --------------

Vegitable.unshift("Muli");
console.log("When we unshift Method:- ",Vegitable);

// POP :- delete from end  ----------------

Vegitable.pop()
console.log( "When we pop Method:- " , Vegitable)


// SHIFT :- Delete from start  ----------------

Vegitable.shift()
console.log( "When we shift Method:- " ,Vegitable);


// INDEXOF :- Returns index of something.---------------------

let Drink = ["coffee","Tea","Green Tea"];

console.log(Drink.indexOf("coffee")); // 0


// INCLUDES :- Search for a value. -----------------

console.log(Drink.includes("Tea"));  // true
console.log(Drink.includes("Chai"));  // false


// CONCAT :- Merge to Array

console.log(Drink.concat(Vegitable));

//REVERSE :-

//  Key Points About reverse()
//  1. Modifies the original array (not a new one).
//  2. Returns the reversed array.
//  3. Works with any data type inside an array (strings, numbers, objects, etc.).

console.log(Drink.reverse());
console.log(Drink);

// TOREVERSED

        // JavaScript ES2023 introduced toReversed(),
        // which returns a new reversed array without modifying the original one.

        let arr = [1, 2, 3, 4, 5];
        let reversedArr = arr.toReversed(); // Doesn't modify `arr`
        
        console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
        console.log(arr);         // Output: [1, 2, 3, 4, 5] (Original array remains unchanged)
              


// SLICE (START,END): - Copies a portion of an Array. Without modifying the original one.


console.log(Vegitable.slice());
console.log(Vegitable.slice(2)); //  [ 'Gobhi', 'kaddu', 'Bhindi' ]
console.log(Vegitable.slice(2,6));   // [ 'Gobhi', 'kaddu', 'Bhindi' ]


console.log(Vegitable.slice(-1)); //[ 'Bhindi' ]
console.log(Vegitable.slice(Vegitable.length-1)); //[ 'Bhindi' ]


//SPLICE (START,DELETE,ITEM No.)  add, remove, or replace elements.It modifies the original array and returns the removed elements

let colors = ['blue','green','black','yellow','orange','red','pink','brown'];

console.log(colors); 

console.log("Right now the length of array is",colors.length); //  8


console.log("Without passing any arugements in splice",colors.splice()); // We got empty Array

// console.log("Passing starting arguement",colors.splice(1)); //['green','black','yellow','orange','red','pink','brown'] Here we got the deleted arr.

console.log("what i goinh here",colors.splice(1,2)); // [ 'green', 'black' ] Same we got deleted arr.

console.log(colors.length); //6

console.log(colors); //










