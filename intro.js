// this is comment 
/* 
long comment 
*/

//primitive data types strings, integeres , booleans, arrays , float
//objects similar to python dictionaries 
//javascript is weakly type python
//js casing convetion is camelcasing
//thisIsVariable

//variable declaration store in memory
var helloWorld;

//variable assignment assigning value 
helloWorld = 'hello World';

var helloWorld2 = 'hello World 2';

helloWorld = 'Hello again';

//console.log(helloWorld);

var newVar = 'Value'

let newVar2 = 'Value 2'

const newVar3 = 'Value 3'

//can't do this because newVar3 is constant
//newVar3 = "NEW VALUE"

let favoriteNumber = 10

let myFloat = 20.3

//console.log(favoriteNumber,myFloat)

let myNums = [1, 4, 6, 2, 3, 6]
//console.log(myNums)

//index to get the second item in the array and log it 

//console.log(myNums[1])

myNums[1] = 10

//console.log(myNums[1])
//console.log(myNums)

const myPerson = {
    firstName: 'Lucas',
    lastName: 'Leung',
    age: 29,
    status: 'Single'
}

//console.log(myPerson)

//accessing a key inside object 

//dot notation 
//console.log(myPerson.firstName)

//index notation
//console.log(myPerson['lastName'])

//updating key
myPerson['firstName'] = 'Christina'
myPerson.firstName = 'Christina'
//console.log(myPerson)

const fruits={
    'bananas':2,
    'apples' :3,
    pants:33

}

let itemToDisplay = 'apples'

//console.log(fruits[itemToDisplay])

// let myName = 'Lucas'
let myName = 'Christina'

if (myName == 'Lucas'){
    //console.log('Hello Lucas')
} else if (myName == 'Dylan'){
    //console.log('Hey Dylan')
} else {
    //console.log("My heart is given to the Lord, if I have affections for you, the Lord himself will draw me to you")
}

//return a single string based on the value of n
function fizzbuzz(n) {
    if (n%3==0 && n%5==0){
    return 'fizzbuzz'        
} else if (n%3==0){
    return 'fizz'
} else if (n%5==0){
    return 'buzz'
} else {
    return n
}
}

//functions a couple of ways to create function

function firstFunction(param1) {
    return param1
}

const newFunc = function(param1) {
    return param1
}

// equivalent to python lambda "anonymous function"
// arrow functions
const arrowFunc = (param1) => {
    return param1
}

//console.log(firstFunction('Hello'))
newFunc('Hello')
arrowFunc('Hello')

//for loops
//3 main types

let myLoopNums = [1, 50, 10, 5]

//traditional loops
for (let i = 0; i < myLoopNums.length; i++) {
    //console.log(myLoopNums[i])
}

//for of loop
//this is eqiuvalent to for currentNum in my loopNums

for  (let currentNum of myLoopNums) {
    //console.log(currentNum)
}

//for in loop --- loop through index 

for(let currKey in myLoopNums){
    //console.log(currKey)
}

for(let currKey in myPerson){
    //console.log(currKey, myPerson[currKey])
}

//formatted string
let animal = 'Penguin'
//print string that says your favorite animal is {Penguin}
//console.log('Your favorite animal is ' + animal)

//f' strings
//in js ``

//console.log(`Your favorite animal is ${animal}`)








//question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

//     def hello_name(user_name):

Username = 'Devon!'

function helloUsername(Username){
    // return 'hello_USERNAME!'
    return `Hello, how is your day ${Username}`
}

//console.log(helloUsername(Username))










//question 2

//Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing

// def first_odds():
// .....

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function returnOdds(nums){
//     for (let i = 0; i < myLoopNums.length; i++)
//     if (i%2==1){
//     return nums[i]       
//     }
    


// console.log(returnOdds(nums))

//.append()
//.push
// let myNumbers = [4,5,6]
// myNumbers.push(4)
// console.log(myNumbers)

// myNumbers.shift()
// console.log(myNumbers)

// myNumbers.pop()
// console.log(myNumbers)

//.unshift adds to beginning of array
// myNumbers.unshift(16)
//console.log(myNumbers)

//.includes()
//if 10 in myNums
// if (myNumbers.includes(3)){
//    console.log('3 is there')
// }

//.indexof()
//console.log(myNumbers.indexOf(2))

//console.log(myNumbers.at(-1))

// console.log(myNumbers[myNumbers.length-2])

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

// console.log(months.slice(1, 4)) 

//splicing
// months.splice(5, 0, 'Min')

//console.log(months)

// splice(where you want to change, how many you want to delete, what you want to add in)
// months.splice(0, 3, 'New')
// console.log(months)

// let result = months.splice(0, 3, "Lom")

//console.log(result)

// console.log(months.reverse())

// months.sort()
// console.log(months)

let unsortedNums = [2, 1, 3, 5, 4, 6, 7, 8, 9, 10]

// unsortedNums.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     else {
//         return -1
//     }
// })

// unsortedNums.sort((a,b) => a - b)

// unsortedNums.sort((a, b) => {
//     return a - b
// })

unsortedNums.sort((a,b) => b - a)

// console.log(unsortedNums)

// months.sort((a, b) => {
//     if (a.chartAt(1) > b.chartAt(1)) {
//         return 1
//     } else{
//         return -1
//     }
// })

// console.log(months)

//.join()
const words = ['hello', 'world', 'again']
// console.log(words.join(' '))

wordStr = 'hello world again'
// console.log(wordStr.split(' '))

//while loops
// let i = 0
// while (true) {
//     console.log(i)

//     i += 1

//     if (i>10) {
//         break
//     }
// }

// let i = 0
// while (i<10) {
//     console.log(i)

//     i += 1
// }



// """ Given an list nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.Example:Input: [0,1,0,3,12]Output: [1,3,12,0,0]
// Example Input: [0,0,11,2,3,4]Example Output: [11,2,3,4,0,0]"""

// def move_zeros(li):    
//     zeros = []    
//     counter = li.count(0)    
//     for _ in range(counter):        
//     li.remove(0)        
//     zeros.append(0)
//     result = li + zeros
//     return result

// print(move_zeros([0,1,0,3,12]))
// li = [0,0,11,2,3,4]

// function move_zeros(li) { 
//     let counter = li.filter(x => x==0).length;
//     console.log(counter)
//     let num = li.filter(x => x!=0).length;
//     console.log(num)
//     let result = num.concat(counter);
//     console.log(result)
//     return result

// }

// console.log(move_zeros(li))




// """Consecutive IndicesYou are given a list of unique integers (arr), and two integers (a and b). Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).It is guaranteed that a and b are both present in arr.Example:Input: ([1, 6, 9, -3, 4, -78, 0], -3, 4)Output: TrueInput: ([3,1,0,19], 19, 0)Output: True """def isConsecutive(arr, a, b):    

//     index_a = None    
//     index_b = None
//     i = 0    
//     for item in arr:        
//         if item == a:            
//             index_a = i        
//             if item == b:            
//                 index_b = i        
//                 i += 1
//     difference = index_a - index_b
//     print(index_a, index_b)    
//     return difference == 1 or difference == -1

// print(isConsecutive([3,1,19,0], 19, 0))



// function consecutive(li , a, b){
//     let first = li.indexOf(a);
//     console.log(first)
//     let second = li.indexOf(b);
//     console.log(second)    
//     if (first + 1 == second){
//         return true
//     } else if (second + 1 == first){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4))
// console.log(consecutive([1, 6, 9, -3, 1, 4, -78, 0], -3, 4))
// console.log(consecutive([1, 6, 9, 4, -3, -78, 0], -3, 4))


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for 
}

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
