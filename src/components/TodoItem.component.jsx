import React from "react";
 import "./TodoItem.style.css";
import axios from "axios";


const TodoItem = ({ todos:{todoName,todoDescription},id}) => {
  // const { todoName, todoDescription } = todo;
  const deleteTodo = () => {
    axios.delete(`http://localhost:8080/delete-todo/${id}`)
      .then((response) => console.log(response));
  };
  const modify = () =>{
    
    var updateToDoName = prompt("update ToDo_Name");
    var updateToDoDescription = prompt("update ToDo_Description")
    axios.put(`http://localhost:8080/modify-todo/${id}`,{
        todoName: updateToDoName,
        todoDescription: updateToDoDescription
    })

  }
  return (
    <React.Fragment>
      <div className="todo flex align-items-center gap-small">
        <input type="checkbox" />
        <div>
          <span>
            <strong>{todoName}</strong>
          </span>
          <span>{todoDescription}</span>
        </div>
        <button onClick={modify}>Modify</button>
        <button className="delete" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;