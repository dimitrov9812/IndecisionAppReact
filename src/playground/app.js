//stateless functional component
class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
    //life cycle methods - fire only in class components
    componentDidMount(){
      const json = localStorage.getItem("options");
      const optionsJson = JSON.parse(json);
      console.log(optionsJson);
      if(options){
        this.setState(() => ({
          options: optionsJson
        }))
      }
    }
    //another life cycle method
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
      }
    } 
    //another life cycle method
    componentWillUnMount(){
      console.log("componentWillMount");
    }
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options: []
        };
      });
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.includes(option) === true) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),

        };
      });
    }
    handleDeleteOption(option){
      const index = this.state.options.indexOf(option);
      console.log("index is" + index);
      this.setState((prevState) => {
        return {
          options: prevState.options.splice(index)
        };
      });
    }
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div id="wrap">
          <Header  title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }

  //Header stateless function
  const Header = (props) => {
    return (
      <div id="head">
        <h1>{props.title}</h1>
       {props.subtitle &&  <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  //Set Default props values for the Header component
  Header.defaultProps = {
    title: "Indecision"
  };

  //Old class based component: 
  /*
  class Header extends React.Component {
    render() {
      return (
        <div id="head">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  */
  //Action stateless function
  const Action=(props) => {
    return (
      <div id="action">
        <button
          id="action-button"
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
  //Old class based component:
  /*
  class Action extends React.Component {
    render() {
      return (
        <div id="action">
          <button
            id="action-button"
            onClick={this.props.handlePick}
            disabled={!this.props.hasOptions}
          >
            What should I do?
          </button>
        </div>
      );
    }
  }
  */
 //Options stateless function
  const Options = (props) => {
    return (
      <div id="options">
        <div id="remove-div">
          <button id="remove-button" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
          props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  };
  //Old class based component: 
  /*
  class Options extends React.Component {
    render() {
      return (
        <div id="options">
          <button id="remove-button" onClick={this.props.handleDeleteOptions}>Remove All</button>
         
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
          
        </div>
      );
    }
  }
  */
 //Option tateless function
 /*
 const Option = (props) => {
  
  return (
    <div id="option">
      {props.optionText}
      <span id={props.optionText}>X</span>
    </div>
  );
 };
 */
  //Old class based component: 

  class Option extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
     handleDeleteOption(e){
     const deleteID = e.target.id;
     console.log(deleteID);
     const error = this.props.handleDeleteOption(option);
   }
    render() {
      return (
        <div id="option">
          <span id="option-text">{this.props.optionText}</span>
            <div className="deleteDiv" id={this.props.optionText} onClick={this.handleDeleteOption}>
              <span id={this.props.optionText}>X</span>
            </div>
        </div>
      );
    }
  }
  
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(() => {
        return {
           error
         };
      });
      if(!error){
        e.target.elements.option.value = '';
      }
    }
    render() {
      return (
        <div id="add-option">
          {this.state.error && <p id="error">{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" id="text-field" name="option" />
            <button id="add-button">Add Option</button> 
          </form>
        </div>
      );
    }
  }

  // Stateless function example:
  /*
  const User =(props) =>{
    return(
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }
  */
  //Challenge -> Convert all methods(int this case - Action,Option,Options,Header)which will not affect the IndecisionApp to stateless functions
  const componentDiv = $("#component-div")[0];
  ReactDOM.render(<IndecisionApp />,componentDiv);