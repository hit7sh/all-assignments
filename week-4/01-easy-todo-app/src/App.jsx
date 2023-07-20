import { useEffect, useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import AddTodo from './AddTodo';
import ShowAllTodos from './showAllTodos';
import AppBar from './AppBar';

function App() {
  // fetch all todos from server
  const [showAll, setShowAll] = useState(0);
  const [add, setAdd] = useState(1);

  return (
    <>
      <div>
        <AppBar></AppBar>
        <br />
        <center>
          <Button variant="outlined" onClick={()=>{add ? setAdd(0):setAdd(1); }} 
                  style={{marginLeft:"15px",marginRight:"10px"}}>{!add?"Add a todo":"Hide"}</Button>
        </center>
        {!add? "" : <AddTodo />}
        <br />
        <br />

        <Button variant="outlined" onClick={()=>{showAll ? setShowAll(0):setShowAll(1); }} 
                style={{marginLeft:"15px",marginRight:"10px"}}>{showAll?"Hide all todos...":"Show All Todos..."}</Button>

        { showAll === 1 && <ShowAllTodos /> }
      </div>
    </>
  )
}



export default App
