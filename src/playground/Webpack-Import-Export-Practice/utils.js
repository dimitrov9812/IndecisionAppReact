console.log("utils.js is running");

//one way is with export in front of the variable
export const square = (x) => x*x;
export const add = (a,b) => a+b;

const subtract = (a,b) => a-b;
//exports -default export - named exports
/*
export {
    square,
    add
};
*/
export {subtract as default}

//lets see about the default export