import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './ToDo.jsx'
import ToDo  from './ToDo.jsx'
import Actor from './Actor.jsx'
import Counter from './Counter'
import Users from './Users'

function App() {
  
const actors=['A','B','V']
function handleClick(){
  alert('button clicked');
}
  return (
    <>
      
      <h1>Vite + React</h1>
      <Users></Users>
      <Counter></Counter>
      {/* <Person/>
      <Student name="shimu" age="22"></Student>
      <ToDo task="react" isDone={true}/>
      <ToDo task="js" isDone={false}/>
      <Actor name={"Shimu"}/>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }  */}
      <button onClick={handleClick}>click here</button>
     
    </>
  )
}
function Person(){
  return(
  <>
  <h1>I am now learning react</h1>
  </>
  )
}
const {name,age}={name:'shimu',age:'22'}
function Student({name,age}){
  return(
    <>
    <div className='student'>
      <h3>I am a student</h3>
      <h3>My name is Shamime Akter Shimu</h3>
      <h3>name: {name}</h3>
      <h3>I love coding</h3>
    </div>
    </>
  )
}

export default App
