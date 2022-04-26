import React from "react";


import TodoItem from "./TodoItem.component";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  addTodo = () => {
    if (this.state.input.length === 0) {
      alert("Enter something");
      return;
    }
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, this.state.input],
      };
    });
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            placeholder="add ur todo list"
            onChange={this.inputHandler}
            value={this.state.input}
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
        <div className="todos">
          {this.state.todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo} />;
          })}
          {this.state.todos.length === 0 && (
            <div className="center">Nothing</div>
          )}
        </div>
      </>
    );
  }
}

export default TodoList;
