//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAVE","PuRple","dog"]

// console.log(dog_names.join(' '))
/*
loop through the list
loop thorugh the string
check to see if elements in the list are in the string
return true
*/

// console.log('HELLO'.toLowerCase())

function findWords(dog_names, dog_string){
    dog_string = dog_string.toLowerCase() 
    for (let i = 0; i < dog_string.length; i++){
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i].toLowerCase)){
            return true
        } else {
            return false
        }   
    }
}
}

console.log(findWords(dog_names, dog_string))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

//Expected output
// arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


function evenChange(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i%2==0) {
            arr.splice(i, 1, 'even index') 
        }
    } return arr
}

// console.log(evenChange(arr))

// CodeWars

//Question 1 MULTIPLY

function multiply(a, b){
    return a * b
  }
  
//Question 2 EVEN OR ODD

function evenOrOdd(number) {
    if (number%2==0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }