import React from 'react';
export default class AddOption extends React.Component {
  state = {
    error:undefined
  }
    handleAddOption = (e)  => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      console.log("testing");
      this.setState(() => {
        return {
           error
         };
      });
      if(!error){
        e.target.elements.option.value = '';
      }
    };
    render() {
      return (
        <div className="add-option">
          {this.state.error && <p className="error">{this.state.error}</p>}
          <form className="add-form" onSubmit={this.handleAddOption}>
            <input type="text" className="selector__text-field" name="option" />
            <button className="button add-button">Add Option</button> 
          </form>
        </div>
      );
    }
  }