import React from 'react';


  //Action stateless function
const Action=(props) => (
      <div id="action">
        <button
          className="big-button"
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
  )

  export default Action;
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