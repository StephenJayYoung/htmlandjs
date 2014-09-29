document.body.onload = addElement;


// //create a title
// var headerOne = document.createElement('h1');




function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("This is the second blog post I've ever written");
  newDiv.appendChild(newConte nt); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

console.log(headerOne);