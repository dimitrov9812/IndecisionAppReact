console.log("Hello");

//arguments object - no longer bound with functions

const add =(a,b) => {
    //console.log(arguments);
    return a+b;
}

console.log(add(3,3));

//this keyword - no longer bound

const user = {
    name: "Alex",
    cities: ["Madan","Plovdiv","Sofia"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }   
}; 

console.log(user.printPlacesLived());

//===Challenge===
//

const multiplier = {
    // numbers - array of numbers
    numbers: [4,2,6,7,10,20,5] ,
    // multiplyBy - single number
    multiplyBy: 6,
    // multiply - return a new array where the numbers have been multiplied
    multiply(){
        return this.numbers.map((num)=> num*(this.multiplyBy)); 
    }
};

console.log(multiplier.multiply());