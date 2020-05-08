import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
//import the normalize.css to make sure that we start from the same spot and our app
//will run and look the same on different browsers and on different Operation Systems
import 'normalize.css/normalize.css';
//import the styles 
import './styles/styles.scss';
//styles are added with SCSS and SASS

//stateless functional component

//====Challenge====
// Setup import/export
// Move the imports to that new file (and setup and import for indecision here)

  
  //=====Challenge=====
  //1. Create new files for every component and import it here
  
  const componentDiv = $("#component-div")[0];
  ReactDOM.render(<IndecisionApp />,componentDiv);
/*
  //Learning the Babel class syntax plugin
  //Example for the old syntax
  class OldSyntax {
    constructor(){
      this.name = "Alex";
      this.getGreeding = this.getGreeding.bind(this);
    }
    getGreeding(){
      return `My name is ${this.name}`;
    }
  }
  const oldSyntax = new OldSyntax();
  const greeting = oldSyntax.getGreeding;
  console.log(oldSyntax);
  console.log(greeting());

  // --------------

  //Example of the new syntax
  class NewSyntax {
    name = "Jen";
    getGreeding = () => {
      return `My name is ${this.name}`;
    }
  }

  const newSyntax = new NewSyntax();
  const newGetGreeding = newSyntax.getGreeding;
  console.log(newSyntax);
  console.log(newGetGreeding());
   
*/