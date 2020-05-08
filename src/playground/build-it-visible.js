console.log("Hello");
let isVisible = true;
const changeState = () => {
    if(isVisible){
        isVisible =false;
    }
    else
    {
         isVisible= true;
    }
    console.log(isVisible)
    render();
}

//create the div
const visibleToggleDiv = $("#visible-toggle-div")[0];
//create the render function
const render = () =>{
    const visibleToggle = (
        <div id="wrap">
            <h1>Visibility toggle</h1>
        <button onClick = {changeState}>{isVisible ? "Hide details" : "Show details"}</button>
        {isVisible && <p id="comment" name="comment">Here the text was hidden</p>}
        </div>
    );
    ReactDOM.render(visibleToggle,visibleToggleDiv);
}
//call the render function
console.log(isVisible);
render();


