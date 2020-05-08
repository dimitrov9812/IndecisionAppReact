//ternary operators 

 //true/false ? firstConfition:secondCondition 
 //if the condition passes it uses the first else the second
 var user = {
    name: "Sunkata",
    age: 13,
    location:'Atlanta'
};

 var ternaryInfo = (
    <div id="wrapper">
       <h1>Ternary in JSX</h1>
       <p>My Name is {user.name ? user.name : "Anonymous"}</p>
       <ol>
           <li>
               {user.age} years old.
           </li> 
            {getLocation()}
       </ol> 
    </div>); 

function getLocation(){
    if(user.location){
        return <p>Location: {user.location}</p>
    }
}
 var ternaryDiv = $('#ternary-div')[0];
 ReactDOM.render(ternaryInfo,ternaryDiv);