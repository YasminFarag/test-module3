
// 1

let myCity = 'cairo';

if ((myCity.substring(0,3) === 'los') || (myCity.substring(0,3) === 'new') ) {
console.log(`${myCity} includes los or new`);

} else {
    console.log(`${myCity} dosen't include los or new`);
    
}



// 2

let myArray = [10, 15, 20]
console.log(myArray[0] + myArray[1] + myArray[2]);



// // 3

 let firstName = 'maria';
 let lastName = 'john';

 reversedName = firstName.concat(' ' ,lastName);
 console.log(reversedName);

 
 

// 4

let newNumber = 100;
if ( newNumber % 100 === 0) {
    console.log('it is true');
    
} else  {
    console.log('it is false');
    
}

// 5

let newArr = ["clever", 'new', 'scoop']


// 6


for (let i = 0; i <= 10; i++) {
    
    if (i % 2 === 0) {
        console.log(`${i} is even`);
        
    } else {
        console.log(`${i} is odd`);
        
    }
    
}

// 8

let myVar = "maria jane jones";
let newWord1 = myVar.substring(0,1).toUpperCase();
let newWord2 = myVar.substring(1,6).toLowerCase();
let newWord3 = myVar.substring(6,7).toUpperCase();
let newWord4 = myVar.substring(7,11).toLowerCase();
newWord5 = myVar.substring(11,12).toUpperCase();
newWord6 = myVar.slice(12).toLowerCase();
console.log(`${newWord1}${newWord2}${newWord3}${newWord4}${newWord5}${newWord6}`);

//9

let myString = 'hello this is me';
myString.split(' ');
console.log(myString.length);



  
// 7
let firstAngel = 29;
let secondAngel = 59;
let thirdAngel = 100 - (firstAngel + secondAngel)
console.log(thirdAngel);
if ()
