// import React from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './Components/InputFieled'
import InputFieled from './Components/InputFieled';
let name: string
let age:  number|string
let hobbies: string []
let printName: (name : string)=> void

//  function printName1(n:string){
//   console.log(n)
//  }
//  printName('meriem')

// interface person{
//   name: string
//   age?:number
// }

function App() {
  const [todo, setTodo]=useState<string>("")
  return (
    <div className="app">
      <span className="heading">taskify</span>
      <InputFieled todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
