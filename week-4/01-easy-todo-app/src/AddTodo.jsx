import { TextField, TextareaAutosize } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    let addTodo = () => {
    fetch('http://localhost:3000/todos', 
        {
          method:"POST", 
          body:JSON.stringify({title:title, description:desc}), 
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response)=> {
    });
  };

return (<>
      <br />
      <br />
      <center>
        <div style={{
          border:"2px solid", 
          alignItems:"center", 
          padding:"15px", 
          marginBottom:"30px", 
          display:"inline-flex", 
          flexDirection:"column", 
          justifyContent:"center"}}>            
        <h2><u>Add a Todo!</u></h2>
        <TextField id="outlined-basic" label="Title" variant="standard" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <br />
        <br />
        <TextareaAutosize minRows={2} onChange={(e)=>setDesc(e.target.value)} placeholder='Description' />
        <br />
        <Button variant="contained" onClick={()=>{addTodo(); props.fetchAll();}}><AddIcon/></Button>
        </div>
        </center>

        </>)
}

export default AddTodo;