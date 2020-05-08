import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: ["hello"],
      selectedOption: undefined
    };
  }
     
    //event for our Modal button -> toggles the modal visibility
    handleModalClose = () => {
        this.setState(() => {
          return {
            selectedOption: undefined
          };
        });
      }
    //event for deleting all of our options
    handleDeleteOptions = () => {
      this.setState(() => {
        return {
          options: []
        };
      });
    }
    //event for picking a random option and activation the modal for showing that option
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => {
        return {
          selectedOption: option
        };
      });
    }
    //event for adding an option and validating if the input in the text field is correct
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.includes(option) === true) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
    //event fo deleting desired option -> !!MUST FIX!!
    handleDeleteOption = (option) => {
      const index = this.state.options.indexOf(option);
      console.log("index is" + index);
      this.setState((prevState) => {
        return {
          options: prevState.options.splice(index)
        };
      });
    }
    //life cycle methods - fire only in class components
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // Do nothing at all
      }
    }
    //another life cycle method
    componentDidUpdate = (prevProps, prevState) =>{
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
      }
    } 
    //another life cycle method
    componentWillUnMount= () =>{
      console.log("componentWillMount");
    }
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
            <Header  title={title} subtitle={subtitle} />
          <div className="container">
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
            </div>
            
          </div>
          <OptionModal
           selectedOption = {this.state.selectedOption}
           handleModalClose = {this.handleModalClose}
           />
        </div>
      );
    }
  }

export default IndecisionApp;