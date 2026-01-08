

const Problem1 = (input) => {

    const str = input

    let reverse = ""

    for (let i = str.length - 1; i >= 0; i--) {

    reverse += str[i]
}

return reverse
    
}

// console.log(Problem1("Hello"))


const Problem2 = (input) => {

    let count = 0
    
       
    for (let i = input.length - 1; i >= 0; i--) {

        // console.log(i)

       input = input.toLowerCase()

        if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
            count++
        }

}

return count
    
}

// console.log(Problem2("programminge"))


const Problem3 = (input) => {

    input = input.toLowerCase()

    let index = 0

       
       
    for (let i = input.length + 1; i >= 0; i++) {
      
        if (input[0] == input[input.length - 1]) {
      
       return true
        }
        else {
           return false
        }
   }


    
}

// console.log(Problem3("madan"))


const Problem4 = (input) => {
   
    let largest = input[0];

   
    for (let i = 1; i < input.length; i++) {
        if (input[i] > largest) {
            largest = input[i]; 
        }
    }

    return largest;
}

// console.log(Problem4([5, 1, 9, 3, 12])); 


const Problem5 = (input) => {
   
    let notsame = []

   
    for (let i = 0; i < input.length; i++) {
        if (!notsame.includes(input[i])) {
            
            notsame.push(input[i]) 
        }
    }

    return notsame;
}

console.log(Problem5([1, 2, 2, 3, 4, 4]));


const Problem6 = (input) => {
    let sum = 0; 

 
    for (let i = 0; i < input.length; i++) {
        sum += input[i]; 
    }

    return sum; 
}


// console.log(Problem6([1, 2, 3, 4])); 


const Problem7 = (input) => {


    let evenNumbers = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            evenNumbers.push(input[i]);
        }

    }
    
    return evenNumbers;
}
// console.log(Problem7([1, 2, 3, 4, 5, 6]))


const Problem8 = (input) => {
    let result = "";

    for (let i = 0; i < input.length; i++) {

        if (i === 0 || input[i - 1] === " ") {
            result += input[i].toUpperCase();
        } else {
            result += input[i];
        }
    }

    return result;
}


// console.log(Problem8("hello world")); 


const Problem9 = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i; 
    }

    return result;
}


// console.log(Problem9(5));



const Problem10 = () => {

    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Pingpong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}

// Problem10();

