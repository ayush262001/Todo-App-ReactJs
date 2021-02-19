import React from "react";

import TodoWork from "./TodoWork";
const Todo = ({todos , setTodos, filterTodos}) =>
{

    return(
        <div className="todo-container">
      <ul className="todo-list">
          {
              filterTodos.map( (todo) => (
                  <TodoWork todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
              ))
          }
      </ul>
    </div>
    );
}

export default Todo;