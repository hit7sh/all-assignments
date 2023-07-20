import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function ShowAllTodos() {
  const [todos, setTodos] = useState([]);
  function fetchTodos() {
    fetch('http://localhost:3000/todos').then((response) => {
      response.json().then(data => setTodos(data.reverse()));
    });
  }

  useEffect( ()=> {
    fetchTodos();
  }, [])

  let deleteTodo = (id) => {
      fetch('http://localhost:3000/todos/'+id, {method:'DELETE'}).then((response)=>{
      fetchTodos();
      });
  };
  return (<>{
          todos.map(todo => (
          <div key={todo.id} style={{"backgroundColor":"black","color":"white","margin":"15px", padding:"10px"}}>
            <div>ID: {todo.id}</div><br />
            <div>{todo.title}</div><br />
            <div>{todo.description}</div>
            <Button variant="contained" color="error" onClick={()=>{deleteTodo(todo.id), fetchTodos(), setTodos(todos)}}><DeleteIcon/></Button>
            </div>
        ))
      }
    </>);
}