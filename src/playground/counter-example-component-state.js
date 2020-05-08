//Challenge - setup default prop value to 0
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("App Started");
        const json = localStorage.getItem("count");
        const countJson = JSON.parse(json);
        console.log(countJson);
        this.setState(() => ({
            count: countJson
          }))
    }
    componentDidUpdate(prevState,prevProps){
        console.log("Updated");
        const json = JSON.stringify(this.state.count);
        localStorage.setItem("count",json);
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
    }
    handleRestart(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Count: <span id="count">{this.state.count}</span></h1>
                <button id="plusButton" onClick = {this.handleAddOne}>+1</button>
                <button id="minusButton"onClick = {this.handleMinusOne}>-1</button>
                <button id="resetButton"onClick = {this.handleRestart}>reset</button>
            </div>
        );
    }
}
//Left from the exercise when we used defaultProps
/*
Counter.defaultProps = {
    count: 0
}; 
*/

// Create 3 methods : handleAddOne, handleMinusOne, handleReset
// Use console.log to print the method name
// Wire up onClick & bind in the constructor 

const counterDiv = $("#counter-div")[0];
//if we want to start the count from 100
/*
ReactDOM.render(<Counter count = {100}/>,counterDiv);
*/
//if we do not specify count value 
ReactDOM.render(<Counter />,counterDiv);