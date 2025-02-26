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
              


// SLICE : - Copies a portion of an Array


console.log(Vegitable.slice(2));