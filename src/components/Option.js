import React from 'react';

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
        <div className="widget__elements">
          <li >{this.props.optionText}</li>
        </div>
      );
    }
  }

  export default Option;

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