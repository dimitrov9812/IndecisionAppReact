//VisibilityToggle - render, constructor, handleToggleVisibility
//visibility -> false
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false,
            title:"Visibility toggle",
        }
    }
    handleVisibility(){
        console.log(this.state.visibility);
        this.setState((prevState) => {
                return { 
                    visibility: !prevState.visibility
            }
        });
    }
    handleMessage(){
        console.log("handleMessage "+this.state.visibility)
        if(this.state.visibility){
            return  <p>This is the secret message</p>
        }
    }
    render(){
        return(
            <div>
            <h1>{this.state.title}</h1>
            <button onClick = {this.handleVisibility}>{this.state.visibility ?"Hide Text":"Show Text"}</button>
            {this.state.visibility && <p id="comment" name="comment">Secret Text</p>}
            </div>
        );
    }
}
const counterDiv = $("#counter-div")[0];
ReactDOM.render(<VisibilityToggle />,counterDiv);
