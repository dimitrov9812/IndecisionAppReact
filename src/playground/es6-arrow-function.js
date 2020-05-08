const square = function(x){
    return x*x;
};
//const squareArrow = (x) => {
 //   return x*x;
//}

const squareArrow = (x) => x*x;

console.log(square(5));
console.log("Arrow => "+squareArrow(10));


//===Challenge==== - Use arrow functions 
// getFirstName("Mike Smith") -> "Mike";
// Create regular arrow function .
// Create second arrow function using shorthand syntax.
//=====================================================

 const fullName = "Alexander Dimitrov";
 const fullName2 = "Petko Slaveikov";
 const getFirstName = (x) => x.split(" ")[0];

 console.log(getFirstName(fullName));
 console.log(getFirstName(fullName2));
 console.log(getFirstName("Sunkata Kisyov"));
