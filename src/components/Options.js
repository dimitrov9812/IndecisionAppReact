 import React from 'react';
 import Option from './Option';

 //Options stateless function
 const Options = (props) => (
      <div id="options">
        <div className="widget-header">
           <h3 className=".widget-header__title">Your Options</h3>
           <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        <div className="widget_element-field">
             {props.options.length === 0 && <p className="widget__element">Please add an option to get started</p>}
             <ol>
             {
             props.options.map((option) => <Option key={option} optionText={option} />)
             }
             </ol>
        </div>
      </div>
  );

  
  export default Options;
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