import React, { useState, useEffect } from "react";
import './App.css';

//importing components
import Form from "./components/form";
import Todo from "./components/TodoList";

function App() {


  // following stuffs for states
  const [inputText, setInputText] = useState(""); // it means String type data
  const [todos, setTodos] = useState([]); // and it means array type data
  const [status, setStatus] = useState("all");
  const [filterTodos , setFilterTodos] = useState([]);

  //Run once only when the app starts
  useEffect(()=>
  {
    getLocalTodos();
  }, []);

  
  //useEffects  ==> used to run the first parameter of the useEffect for every states present in the array
  // like , todos, status
  useEffect(()=> {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);


  //functions and events below
 const filterHandler = () =>
 {
   switch(status){
     case "completed":
       setFilterTodos(todos.filter(todo => todo.completed === true));
       break;

       case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;

        default:
        setFilterTodos(todos);
   }
 }

 // save to local todos
 const saveLocalTodos = ()=>
 {
   
     localStorage.setItem("todos", JSON.stringify(todos));
   
 }

 const getLocalTodos = () =>
 {
  if(localStorage.getItem("todos") === null)
  {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  else{
    let todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
    setTodos(todoLocal);
   }
 }

  return (
    <div className="App">
      <header>
      <h1>Ayush Todo List</h1>
    </header>
    <Form todos={todos} setTodos={setTodos} 
          inputText={inputText} setInputText = {setInputText}
          setStatus={setStatus}
          />

    <Todo filterTodos = {filterTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
