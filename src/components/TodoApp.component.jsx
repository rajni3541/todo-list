import React,{useState, useEffect} from "react";

 import "./TodoApp.style.css";

import TodoItem from "./TodoItem.component";

import axios from "axios";




const TodoApp = () =>{

const [todo,setTodo] = useState([])
const [user,setUser] = useState({name:'', description:''})

const handleChange = (event) =>{
    const{name,value} = event.target
    setUser((user) =>{return{...user,[name]:value}})
  }


  useEffect (() =>{
    axios.get("http://localhost:8080/show-todo")
    .then((res) =>{setTodo(res.data)})
  })

  const addTodo = () => {
        axios
          .post("http://localhost:8080/add-todo", {
            todoName: user.name,
            todoDescription: user.description,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };



  return (
          <React.Fragment>
            <div className="add-todo">
              <input
                name="name"
                type="text"
                placeholder="Add Name"
                onChange={handleChange}
                // value={this.state.name}
              />
              <input
                name="description"
                type="text"
                placeholder="Add Description"
                onChange={handleChange}
                // value={this.state.description}
              />
              <button onClick={addTodo}>Add Todo</button>
            </div>
            <div className="todos">
              {
              todo.map((todos, index) => {
                return (
                  <TodoItem
                    key={index}
                    todos={todos}
                    id={todos._id}
                    
                  />
                );
              })}
             
            </div>
          </React.Fragment>
        );
}

export default TodoApp;



// class TodoApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       name: "",
//       description: "",
//     };
//   }
//   componentDidUpdate() {
//     axios
//       .get("http://localhost:8080/show-todo")
//       .then((res) => this.setState({ todos: res.data }));
//   }

//   componentDidMount(){
//     axios
//       .get("http://localhost:8080/show-todo")
//       .then((res) => this.setState({ todos: res.data }));
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   addTodo = () => {
//     axios
//       .post("http://localhost:8080/add-todo", {
//         todoName: this.state.name,
//         todoDescription: this.state.description,
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     // console.log(this.state.todos);
//     return (
//       <React.Fragment>
//         <div className="add-todo">
//           <input
//             name="name"
//             type="text"
//             placeholder="Add Name"
//             onChange={this.handleChange}
//             // value={this.state.name}
//           />
//           <input
//             name="description"
//             type="text"
//             placeholder="Add Description"
//             onChange={this.handleChange}
//             // value={this.state.description}
//           />
//           <button onClick={this.addTodo}>Add Todo</button>
//         </div>
//         <div className="todos">
//           {this.state.todos.map((todo, index) => {
//             return (
//               <TodoItem
//                 key={index}
//                 todo={todo}
//                 id={todo._id}
                
//               />
//             );
//           })}
//           {/* {this.state.todos.length === 0 && (
//             <div className="center">Nothing</div>
//           )} */}
//         </div>
//       </React.Fragment>
//     );
//   }
// }