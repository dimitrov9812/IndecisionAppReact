console.log("app is running");

//JSX - JavaScript XML

//first div
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
};

//on form submit
const onFormSubmit = (e) =>{
    e.preventDefault();
    console.log("FormSubmitted");

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        
        render();
    }
};

 //create "Remove All" button above list
 const onRemoveClick = (e) =>{
     e.preventDefault();
     console.log("Everything Deleted!");
     app.options = [];
     render();
 };
 //On make Desicion button function
 const onMakeDecision = (e) =>{
    const random = Math.floor(Math.random()*app.options.length);
    alert("Computer choise => " + app.options[random]);
 };

//on click -> wipe the array ->rerender


const firstDiv = $('#first-div')[0];

const numbers = [55,101,1000];

const render = () =>{
    const template = (
        <div id="wrapper">
           <h1>{app.title}</h1>
           <p>{app.subtitle}</p>
           <p>{app.options.length > 0 ? "Here are your options":"No options listed"}</p>
           <button onClick={onMakeDecision} disabled = {app.options.length === 0}>What should I do?</button>
           <button onClick={onRemoveClick}>Remove All</button>
           <p>{app.options.length}</p>
           <ol>
               {/*Map over app.options getting an array of list items */}
               {
                   app.options.map((x) => <li key={x}>{x}</li>)
               }
           </ol>
           <form onSubmit = {onFormSubmit}>
               <input type="text" name="option"  placeholder="Enter desired option here..."/> 
               <button>Add Option</button>
           </form>
        </div>
        );
//return the jquery as HTML DOM
        ReactDOM.render(template,firstDiv);
};

//Create render function that renders the new jsx
render();
//Call it right away
//Call it after options array added to







 


 

 




