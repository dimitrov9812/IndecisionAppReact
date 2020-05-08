//if statements 
var user = {
    name: "Petko",
    age: 23,
    location:''
};

 var ifStatementsInfo = (
    <div id="wrapper">
       <h1>If statements in JSX</h1>
       <p>My Name is {user.name}</p>
       <ol>
           <li>
               {user.age} years old.
           </li> 
            {getLocation()}
       </ol> 
    </div>
 );

function getLocation(){
    if(user.location){
        return <p>Location: {user.location}</p>
    }
}
 var ifStatementsDiv = $('#if-statements-div')[0];
 ReactDOM.render(ifStatementsInfo,ifStatementsDiv);