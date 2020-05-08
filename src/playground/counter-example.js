let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const restart = () => {
    count=0;
    renderCounterApp(); 
    console.log("Count restarted!");
}

const renderCounterApp = () => {
    
    const eventsTemplate = (
    <div>
        <h1>Count: {count}</h1>
        <button id="button-plus" className="button" onClick={addOne}>+1</button>
        <button id="button-minus" className="button" onClick={minusOne}>-1</button>
        <button id="button-restart" className="button" onClick={restart}>Restart</button>
    </div>
    
 ); 
    const eventsTemplateDiv = $("#events-template-div")[0];
    ReactDOM.render(eventsTemplate,eventsTemplateDiv);
 };
 
renderCounterApp();