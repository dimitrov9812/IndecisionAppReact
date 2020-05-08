 // Car class
 // make
 // model
 // vin number
 //getDescription -> Name is age year(s) old.

 class Person{
     constructor(name = "Anonymous",age) {
         this.name = name;
         this.age = age || 0;
     }
     getGreeting(){
         return (`Hi. i am ${this.name}!`);
     }
     getDescription(){
         return `${this.name} is ${this.age}year(s) old!`;
    }
 };

 class Student extends Person{
    constructor(name,age,major){
        super(name,age );
        this.major = major ;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        console.log("Here=>"+description);
        if (this.hasMajor()){
            console.log("inside method");
            description = description +`and their major is ${this.major}`;
        }
        console.log("second =>"+description);
        return description;
        
    }
 };
 //challenge New SubClass 
 // Traveler -> Person 
 class Traveler extends Person{
     constructor(name,homeLocation){
         super(name);
        // Add support for homeLocation
         this.homeLocation = homeLocation;
     }
     hasHomeLocation(){
         return !!this.homeLocation;
     }
      //Override getGreeding
     getGreeting(){
        let greeting = super.getGreeting();
        //1. if there is homeLocation include it in the message -. Hi i am {name} im visiting from {homeLocation}
        //2. else -> Hi i am {name}
        if(this.hasHomeLocation()){
            greeting += `I am visiting from ${this.homeLocation}`;
        }
        return greeting;
     }

 }





//person instance
 const me = new Person("Alexander Dimitrov",21);
 //student instance
 const meStudyng = new Student("Petko",34,"STD");
 //Create the new traveler and call functions
//traveler instance
const traveler = new Traveler("Ivan","Madan");
console.log("Has location - " + traveler.hasHomeLocation());
console.log(traveler.getGreeting());