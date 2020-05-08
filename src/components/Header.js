import React from 'react';

  //Header stateless function
  const Header = (props) => (
      <div className="header">
        <div className="container">
          <h1 className="header__title">{props.title}</h1>
          {props.subtitle &&  <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
      </div>
    );
  //Set Default props values for the Header component
  Header.defaultProps = {
    title: "Indecision"
  };
  export default Header;

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