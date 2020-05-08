//logical and operator
var user = {
    name: "Dimi",
    age: 6,
    location:'Peshtersko'
};
//check if  there is age and if it is we check if it is bigger or equal to 18 and if yes we print the paragraph
 var logicalAndInfo = (
    <div id="wrapper">
       <h1>Logical And Operator</h1>
       <p>My Name is {user.name ? user.name : "Anonymous"}</p>
        {(user.age && user.age >= 18) && <p>{user.age} years old.</p>}
         {getLocation()} 
    </div>); 

function getLocation(){
    if(user.location){
        return <p>Location: {user.location}</p>
    }
}
 var logicalAndDiv = $('#logical-and-div')[0];
 ReactDOM.render(logicalAndInfo,logicalAndDiv);
