import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';

const AppBar = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        background:"orange",
        padding:5
    }}>
        <div style={{display:"flex"}}>
        <AssignmentIcon fontSize="large" />
        <Typography variant="h6" style={{marginLeft:7}}><b>Todo App</b></Typography>
        </div>

        <AccountCircleIcon fontSize="large" style={{marginRight:10}} />
    </div>
  )
}

export default AppBar