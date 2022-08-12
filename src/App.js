import React from "react";
import './App.css';

function App() {
  const myName = "Juan";
  const myAge = 31;

  return (
    <div>
  		<h1 className="title">Hello World!</h1>
  		<p> This is a paragraph of text</p>
      <p>My name is {myName} and I am {myAge} years old</p>
  	</div>
  )
}
export default App;