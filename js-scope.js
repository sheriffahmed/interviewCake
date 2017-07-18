  // #17 JavaScript Scope
  // If we execute this Javascript, what will the browser's console show?

  var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// It would print undefined in the console since the context phase recognized
// var text as an object and stored in memory by javascript, 
 // it is however left as undefined in that stage and is defined
 // after the console.log function.
